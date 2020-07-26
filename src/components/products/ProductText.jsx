import React from 'react';
import './ProductText.scss';
import { getDesignName, handlePrice } from '../../helpers';

const ProductText = ({ product }) => {
    console.log(product)
    return <div className="product-text">
        <div className="sub heading-text">{getDesignName(product.design)}</div>
        <div className="main heading-text">{product.name}</div>
        <div className="main heading-text">{handlePrice(product.price, 'usd')}</div>
        <div className="row">
            <input type="number"/>
            <button className="client-button add-to-cart-btn">ADD TO CART</button>
        </div>
        <div className="details">
            <h4>DETAILS</h4>
            <div>{product.description}</div>
            <ul>
                <li>{product.dimensions}</li>
                <li>Microwave & dishwasher safe</li>
            </ul>
        </div>
    </div>
}

export default ProductText;