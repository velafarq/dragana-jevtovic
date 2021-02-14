import React from 'react';
import './ProductGallery.scss';

const ProductGallery = ({ image, toggleExpanded }) => {
    console.log(image);
    return (
        <div className="product-gallery">
            <button onClick={() => toggleExpanded()}>close</button>
            <img src={image.url} alt=""/>
        </div>
    )
}

export default ProductGallery;