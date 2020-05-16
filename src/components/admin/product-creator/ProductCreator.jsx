import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createProduct } from '../../../store/actions/admin-actions';
import './ProductCreator.scss';

const ProductCreator = (props) => {
    const { submit, toggleDrawer } = props;

    const baseProduct = {
        design: '',
        description: '',
        name: '',
        type: '',
        dimensions: ''
    }
    const [product, setProduct] = useState({...baseProduct});
    const [images, setImages ] = useState([{
        url: '',
        primary: true,
        alt: ''
    }])
    const [price, setPrice] = useState({ 
        usd: 0,
        gbp: 0,
        zar: 0 
    });

    const designOptions = [
        { value:'', label: ''},
        { value:'blue_guinea', label: 'Blue Guinea Fowl'},
        { value:'royal_african', label: 'Royal African'},
        { value:'brown_feather', label: 'Brown Feather'},
        { value:'oceans_feather', label: 'Oceans Feather'},
        { value:'custom', label: 'Custom'}
    ];

    const typeOptions = [
        { value:'', label: ''},
        { value:'plates', label: 'Plates'},
        { value:'bowls', label: 'Bowls'},
        { value:'teapots', label: 'Teapots'},
        { value:'cups_saucers', label: 'Cups & Saucers'},
        { value:'mugs', label: 'Mugs'},
        { value:'large_servers', label: 'Large Servers'},
        { value:'condiments', label: 'Condiments'}
    ];

    const displayOptions = (options) => {
        return options.map((option, idx) => (
            <option key={idx} value={option.value}>{option.label}</option>
        ))
    };

    const handleChange = (event, key) => {
        setProduct({...product, [key]: event.target.value});
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
        toggleDrawer(event);
    }

    const save = (event) => {
        event.preventDefault();
        const payload = {...product, images, price};
        submit(payload);
        toggleDrawer(event);
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
                    {displayOptions(designOptions)}
                </select>
            </div>
            <div className="form-input">
                <label htmlFor="type">Type</label>
                <select id="type" value={product.type} onChange={(event) => handleChange(event, 'type')} >
                    {displayOptions(typeOptions)}
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
            <button className="add-img" onClick={(event) => addImage(event)}>Add image</button>
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
            <div className="actions">
                <button onClick={(event) => cancel(event)}>Cancel</button>
                <button onClick={(event) => save(event)}>Save</button>
            </div>
        </form>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        submit: (payload) => dispatch(createProduct(payload))
    }
}

export default connect(null, mapDispatchToProps)(ProductCreator);