import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createProduct, updateProduct } from '../../../store/actions/admin-actions';
import './ProductCreator.scss';
import { typeOptions, DisplayOptions, categoryOptions, DESIGN_NAMES, handlePrice } from '../../../helpers';
import { Multiselect } from 'multiselect-react-dropdown';

const ProductCreator = (props) => {
    const { create, toggleDrawer, editable = null, update } = props;

    const baseProduct = {
        categories: [],
        description: '',
        name: '',
        type: '',
        hidden: false,
        height: '',
        diameter: '',
        weight: '',
        volume: '',
        width: '',
        length: ''
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

    const [selectedCats, setSelectedCats] = useState([]);

    useEffect(() => {
        const handleCats = (categories) => {
            const selectedCategories = [];
            categories.forEach(cat => {
                selectedCategories.push({value: cat, label: DESIGN_NAMES[cat]})
            });
            setSelectedCats(selectedCategories);
        }
        if (editable) {
            setImages(editable.images);
            setPrice(editable.price);
            setProduct({...editable});
            handleCats(editable.categories);
        }
    }, [editable]);


    const handleChange = (event, key) => {
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
        // resetData()
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
        // resetData()
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
        setSelectedCats([]);
    }

    const removeImg = (img, idx) => {
        const local = [...images];
        local.splice(idx, 1);
        setImages(local);
    }

    const onSelect = (list, item) => {
        const categories = [...product.categories];
        categories.push(item.value);
        setProduct({...product, categories });
    }

    const onRemove = (list, item) => {
        const categories = product.categories.filter(cat => cat !== item.value);        
        setProduct({...product, categories });
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
                <label htmlFor="">Categories</label>
                <Multiselect 
                options={categoryOptions}
                selectedValues={selectedCats}
                onSelect={onSelect}
                onRemove={onRemove}
                displayValue="label"
                placeholder="Select a category"
                hidePlaceholder={true}
            />
            </div>
            <div className="form-input">
                <label htmlFor="type">Type</label>
                <select id="type" value={product.type} onChange={(event) => handleChange(event, 'type')} >
                    <DisplayOptions options={typeOptions} />
                </select>
            </div>

            <div className="form-input">
                <label htmlFor="dimensions">Height</label>
                <input type="text" value={product.height} onChange={(event) => handleChange(event, 'height')} id='height' />
            </div>

            <div className="form-input">
                <label htmlFor="dimensions">Width</label>
                <input type="text" value={product.width} onChange={(event) => handleChange(event, 'width')} id='width' />
            </div>

            <div className="form-input">
                <label htmlFor="dimensions">Length</label>
                <input type="text" value={product.length} onChange={(event) => handleChange(event, 'length')} id='length' />
            </div>

            <div className="form-input">
                <label htmlFor="dimensions">Diameter</label>
                <input type="text" value={product.diameter} onChange={(event) => handleChange(event, 'diameter')} id='diameter' />
            </div>

            <div className="form-input">
                <label htmlFor="dimensions">Volume</label>
                <input type="text" value={product.volume} onChange={(event) => handleChange(event, 'volume')} id='volume' />
            </div>

            <div className="form-input">
                <label htmlFor="dimensions">Weight</label>
                <input type="text" value={product.weight} onChange={(event) => handleChange(event, 'weight')} id='weight' />
            </div>

            { images.length && images.map((image, idx) => (
                <div key={idx} className="image-inputs">
                    <div className="image-inputs-header">
                        <h3>Image Details</h3>
                        <i className="material-icons" onClick={() => removeImg(image, idx)}>clear</i>
                    </div>
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
                <button className="admin-button cancel" onClick={(event) => cancel(event)}>Cancel</button>
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