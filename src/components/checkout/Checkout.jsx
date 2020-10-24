import React, { Fragment } from 'react';
import './Checkout.scss'
import { connect } from 'react-redux';
import { DESIGN_NAMES, handlePrice } from '../../helpers';
import { Link } from 'react-router-dom';

const Checkout = (props) => {
    console.log(props.items)

    const getPrimaryImage = (item) => {
        if (item.images && item.images.length) {
            const image = item.images.find(img => img.primary);
            return image.url;
        }
        return '';
    }

    const calculateTotal = (price, qty) => {
        const total = price * qty;
        return handlePrice(total, 'usd'); 
    }

    const removeItemFromCart = (item) => {
        console.log(item);
    }

    function handleInput(e, itemDetails) {
        itemDetails.quantity = e.target.value;
    }

    const row = (itemDetails) => {
        const { item, quantity } = itemDetails;

        return (
            <Fragment key={item.id}>
                <div className='box product-name'>
                    <div>{DESIGN_NAMES[item.design]}</div>
                    <div>{item.name}</div>
                </div>
                <div className='box cart-product-img'><img src={getPrimaryImage(item)} alt="" /></div>
                
                <div className='box'>{handlePrice(item.price, 'usd')}</div>
                <div className="box">
                    <input type="number" value={quantity} onChange={(e) => handleInput(e, itemDetails)} min="1" />
                </div>
                <div className="box">{calculateTotal(item.price['usd'], quantity)}</div>
                <div className="box table-actions">
                    <i className="material-icons close" onClick={() => removeItemFromCart(item)}>close</i>
                </div>
            </Fragment>);

    }


    const generateTable = (products) => {
        return products.map((product) => row(product));
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

                {generateTable(props.items)}

            </div>
            <div className="checkout-btn">
                <button className='heading-text contact__form__submit'><Link to={'/checkout/submit'}>Checkout</Link></button>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.cart.items
    }
}

export default connect(mapStateToProps)(Checkout);