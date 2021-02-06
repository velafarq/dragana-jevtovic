import React, { useState } from 'react';
import './ProductText.scss';
import { handlePrice } from '../../helpers';
import { addItem } from '../../store/actions/cart-actions';
import { connect } from 'react-redux';
import { DESIGN_NAMES } from  '../../helpers';

const ProductText = ({ product, addItem, currency }) => {
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

    const handleCategoryLabels = (categories) => {
        const labels = [];
        categories.forEach(cat => {
            labels.push(DESIGN_NAMES[cat]);
        });

        return labels.join(', ');
    }

    return <div className="product-text">
        <div className="sub heading-text">{handleCategoryLabels(product.categories)}</div>
        <div className="main heading-text">{product.name}</div>
        <div className="main heading-text">{handlePrice(product.price, currency)}</div>

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
                <li>This item can be decorated in any style. Contact us for custom orders.</li>
            </ul>
        </div>
    </div>
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (item) => dispatch(addItem(item))
    }
}

const mapStateToProps = (state) => {
    return {
        currency: state.currency.currency
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductText);
