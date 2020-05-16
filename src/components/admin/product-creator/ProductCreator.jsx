import React, { useState } from 'react';

const ProductCreator = () => {
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
    }

    const save = (event) => {
        event.preventDefault();
        const payload = {...product, images, price};
        console.log(payload);
    }

    return (
        <form>
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
                <input type="text" value={product.design} onChange={(event) => handleChange(event, 'design')} id='design' />
            </div>
            <div className="form-input">
                <label htmlFor="type">Type</label>
                <input type="text" value={product.type} onChange={(event) => handleChange(event, 'type')} id='type' />
            </div>
            <div className="form-input">
                <label htmlFor="dimensions">Dimensions</label>
                <input type="text" value={product.dimensions} onChange={(event) => handleChange(event, 'dimensions')} id='dimensions' />
            </div>

            { images.length && images.map((image, idx) => (
                <div key={idx} className="form-input">
                    <label htmlFor={'image-url' + idx}>Image URL</label>
                    <input type="text" value={image.url} onChange={(event) => handleImageChange(event, 'url', idx)} id={'image-url' + idx} />
                    <label htmlFor={'image-alt' + idx}>Image alt text</label>
                    <input type="text" value={image.alt} onChange={(event) => handleImageChange(event, 'alt', idx)} id={'image-alt' + idx} />
                    <label htmlFor={'image-primary' + idx}>Is primary</label>
                    <input type="checkbox" checked={image.primary} value={image.primary} onChange={(event) => handlePrimaryImageChange(event, idx)} id={'image-primary' + idx} />
                </div>
            ))}
            <button onClick={(event) => addImage(event)}>Add image</button>
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
                <button onClick={(event) => cancel(event)}>CANCEL</button>
                <button onClick={(event) => save(event)}>SAVE</button>
            </div>
        </form>
    );
}

export default ProductCreator;