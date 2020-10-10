import React, { useState } from 'react';
import './ProductText.scss';
import { getDesignName, handlePrice } from '../../helpers';
import { addItem } from '../../store/actions/cart-actions';
import { connect } from 'react-redux';

const ProductText = ({ product, addItem }) => {
    const [quantity, setQuantity] = useState(1);
    const addToCart = (item) => {
        const payload = {
            quantity,
            item
        }
        addItem(payload);
    }

    function handleInput(e) {
        setQuantity(e.target.value);
    }

    return <div className="product-text">
        <div className="sub heading-text">{getDesignName(product.design)}</div>
        <div className="main heading-text">{product.name}</div>
        <div className="main heading-text">{handlePrice(product.price, 'usd')}</div>

        <div className="divider"></div>
        <div className="row">
            <input type="number" value={quantity} onChange={(e) => handleInput(e)} min="1" />
            <button className="client-button add-to-cart-btn" onClick={() => addToCart(product)}>ADD TO CART</button>
        </div>
        <div className="details">
            <h4>DETAILS</h4>
            <div className="details__description">{product.description}</div>
            <ul>
                {product.height && <li>Height: <span>{product.height}</span></li>}
                {product.diameter && <li>Diameter: <span>{product.diameter}</span></li>}
                {product.volume && <li>Volume: <span>{product.volume}</span></li>}
                {product.weight && <li>Weight: <span>{product.weight}</span></li>}

                <li>Microwave & dishwasher safe</li>
            </ul>
        </div>
    </div>
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (item) => dispatch(addItem(item))
    }
}

export default connect(null, mapDispatchToProps)(ProductText);
