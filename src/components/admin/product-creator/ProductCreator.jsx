import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createProduct, updateProduct } from '../../../store/actions/admin-actions';
import './ProductCreator.scss';
import { designOptions, typeOptions, DisplayOptions } from '../../../helpers';

const ProductCreator = (props) => {
    const { create, toggleDrawer, editable = null, update } = props;

    const baseProduct = {
        design: '',
        description: '',
        name: '',
        type: '',
        dimensions: '',
        hidden: false
    };

    const [product, setProduct] = useState({...baseProduct});
    const [images, setImages ] = useState([{
        url: '',
        primary: true,
        alt: ''
    }]);
    const [price, setPrice] = useState({ 
        usd: 0,
        gbp: 0,
        zar: 0 
    });

    useEffect(() => {
        if (editable) {
            setImages(editable.images);
            setPrice(editable.price);
            setProduct({...editable});
        }
    }, [editable]);

    const handleChange = (event, key) => {
        console.log(event.target.value)
        if (key === 'hidden') {
            setProduct({...product, hidden: !product.hidden})
        } else {
            setProduct({...product, [key]: event.target.value});

        }
        
    };

    const handleImageChange = (event, key, index) => {
        const imagesCopy = [...images];

        imagesCopy[index][key] = event.target.value;
        setImages([...imagesCopy]);
    }

    const handlePriceChange = (event, key) => {
        setPrice({ ...price, [key]: event.target.value });
    }

    const handlePrimaryImageChange = (event, idx) => {
        const imagesCopy = [...images];
        imagesCopy.forEach((img, index) => {
            img.primary = idx === index;
        });
        setImages([...imagesCopy]);
    }

    const addImage = (event) => {
        event.preventDefault();
        const defaultImg = {
            url: '',
            primary: false,
            alt: ''
        };
        setImages([...images, defaultImg])
    }

    const cancel = (event) => {
        event.preventDefault();
        resetData()
        toggleDrawer();
    }

    const save = (event) => {
        event.preventDefault();
        const payload = {...product, images, price};

        if (editable) {
            update(payload);
        } else {
            create(payload);
        }
        resetData()
        toggleDrawer();
    }

    const resetData = () => {
        setProduct({...baseProduct});
        setImages([{
            url: '',
            primary: true,
            alt: ''
        }]);
        setPrice({ 
            usd: 0,
            gbp: 0,
            zar: 0 
        });
    }

    return (
        <form>
            <h2>Create New Product</h2>
            <div className="form-input">
                <label htmlFor="name">Name</label>
                <input type="text" value={product.name} onChange={(event) => handleChange(event, 'name')} id='name' />
            </div>
            <div className="form-input">
                <label htmlFor="description">Description</label>
                <textarea type="text" value={product.description} onChange={(event) => handleChange(event, 'description')} id='description' />
            </div>
            <div className="form-input">
                <label htmlFor="design">Design</label>
                <select id="design" value={product.design} onChange={(event) => handleChange(event, 'design')} >
                    <DisplayOptions options={designOptions} />
                </select>
            </div>
            <div className="form-input">
                <label htmlFor="type">Type</label>
                <select id="type" value={product.type} onChange={(event) => handleChange(event, 'type')} >
                    <DisplayOptions options={typeOptions} />
                </select>
            </div>
            <div className="form-input">
                <label htmlFor="dimensions">Dimensions</label>
                <input type="text" value={product.dimensions} onChange={(event) => handleChange(event, 'dimensions')} id='dimensions' />
            </div>

            { images.length && images.map((image, idx) => (
                <div key={idx} className="image-inputs">
                    <h3>Image Details</h3>
                    <div className="form-input">
                        <label htmlFor={'image-url' + idx}>Image URL</label>
                        <input type="text" value={image.url} onChange={(event) => handleImageChange(event, 'url', idx)} id={'image-url' + idx} />
                    </div>
                    <div className="form-input">
                        <label htmlFor={'image-alt' + idx}>Image alt text</label>
                        <input type="text" value={image.alt} onChange={(event) => handleImageChange(event, 'alt', idx)} id={'image-alt' + idx} />
                    </div>
                    <div className="form-input check">
                        <label htmlFor={'image-primary' + idx}>Is primary</label>
                        <input type="checkbox" checked={image.primary} value={image.primary} onChange={(event) => handlePrimaryImageChange(event, idx)} id={'image-primary' + idx} />
                    </div>
                </div>
            ))}
            <button className="admin-button add-img" onClick={(event) => addImage(event)}>Add image</button>
            <div className="form-input">
                <label htmlFor="usd">Price - USD</label>
                <input type="number" value={price.usd} onChange={(event) => handlePriceChange(event, 'usd')} id='usd' />
            </div>
            <div className="form-input">
                <label htmlFor="gbp">Price - GBP</label>
                <input type="number" value={price.gbp} onChange={(event) => handlePriceChange(event, 'gbp')} id='gbp' />
            </div>
            <div className="form-input">
                <label htmlFor="zar">Price - ZAR</label>
                <input type="number" value={price.zar} onChange={(event) => handlePriceChange(event, 'zar')} id='zar' />
            </div>
            <div className="form-input check">
                <label htmlFor='hidden'>Hidden</label>
                <input type="checkbox" checked={product.hidden} value={product.hidden} onChange={(event) => handleChange(event, 'hidden')} id='hidden' />
            </div>
            <div className="actions">
                <button className="admin-button" onClick={(event) => cancel(event)}>Cancel</button>
                <button className='admin-button' onClick={(event) => save(event)}>Save</button>
            </div>
        </form>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        create: (payload) => dispatch(createProduct(payload)),
        update: (payload) => dispatch(updateProduct(payload))
    }
}

export default connect(null, mapDispatchToProps)(ProductCreator);