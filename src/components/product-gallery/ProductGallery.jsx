import React from 'react';
import './ProductGallery.scss';

const ProductGallery = ({ image, toggleExpanded }) => {
    return (
        <div className="product-gallery">
            <button className="close-btn" onClick={() => toggleExpanded()}>
                <i className="material-icons">close</i>
            </button>
            <img src={image.url} alt=""/>
        </div>
    )
}

export default ProductGallery;