import React, { Fragment } from 'react';
import './Checkout.scss'
import { connect } from 'react-redux';
import { DESIGN_NAMES, handlePrice } from '../../helpers';
import { Link } from 'react-router-dom';
import {updateItemQuantity, removeItem} from '../../store/actions/cart-actions';

const Checkout = ({ items, currency, updateQuantity, removeItemFromCart }) => {

    const getPrimaryImage = (item) => {
        if (item.images && item.images.length) {
            const image = item.images.find(img => img.primary);
            return image.url;
        }
        return '';
    }

    const calculateTotal = (price, qty) => {
        const total = price * qty;
        return handlePrice(total, currency); 
    }

    const remove = (index) => {
        removeItemFromCart(index);
    }

    const changeQuantity = (e, index) => {
        const payload = {
            item_index: index,
            quantity: Number(e.target.value)
        }
        updateQuantity(payload)
    }

    const row = (itemDetails, index) => {
        const { item, quantity } = itemDetails;

        return (
            <Fragment key={item.id}>
                <div className='box product-name'>
                    <div>{DESIGN_NAMES[item.design]}</div>
                    <div>{item.name}</div>
                </div>
                <div className='box cart-product-img'><img src={getPrimaryImage(item)} alt="" /></div>
                
                <div className='box'>{handlePrice(item.price, currency)}</div>
                <div className="box qty">
                    <input type="number" value={quantity} onChange={(e) => changeQuantity(e, index)} min="1" />
                </div>
                <div className="box">{calculateTotal(item.price[currency], quantity)}</div>
                <div className="box table-actions">
                    <i className="material-icons close" onClick={() => remove(index)}>close</i>
                </div>
            </Fragment>);

    }


    const generateTable = (products) => {
        return products.map((product, i) => row(product, i));
    }

    return (
        <div className="checkout">
            <h1 className="heading-text checkout__title">Order Request</h1>

            <div className="table">
                <div className="box title"></div>
                <div className="box title"></div>
                <div className="box title">Price</div>
                <div className="box title">Qty</div>
                <div className="box title">Total</div>
                <div className="box title"></div>

                {generateTable(items)}

            </div>
            <div className="checkout-btn">
              <Link className='link heading-text contact__form__submit' to={'/checkout/submit'}>Checkout</Link>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.cart.items,
        currency: state.currency.currency
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateQuantity: (data) => dispatch(updateItemQuantity(data)),
        removeItemFromCart: (data) => dispatch(removeItem(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);