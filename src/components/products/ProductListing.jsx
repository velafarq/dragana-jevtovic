import React from 'react';
import './ProductListing.scss';
import { DESIGN_NAMES, handlePrice } from '../../helpers';

const ProductListing = ({ product }) => {
    
    const setImage = () => {
        let url = null;
        if (product && Array.isArray(product.images)) {
            url = product.images.find(img => img.primary);
        }
        if (!url && product.images.length) {
            url = product.images[0]
        }
        return url;
    }

    const image = setImage();


    return (
        <article className="product-listing">
            <img className="product-listing__img" src={image && image.url} alt={image && image.alt} />
            <div className="product-listing__design">{DESIGN_NAMES[product.design]}</div>
            <div className="product-listing__title">{product.name}</div>
            <div className="product-listing__price">{handlePrice(product.price, 'usd')}</div>
        </article>
    )
}

export default ProductListing;