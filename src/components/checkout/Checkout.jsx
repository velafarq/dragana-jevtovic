import React from 'react';
import { connect } from 'react-redux';
import { submitOrder } from '../../store/actions/cart-actions';

const Checkout = (props) => {

    const handleCheckout = () => {
        props.submitOrder(props.items);
    }
    return (
        <div>
            <button onClick={() => handleCheckout()}>Checkout</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.cart.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitOrder: (data) => dispatch(submitOrder(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);