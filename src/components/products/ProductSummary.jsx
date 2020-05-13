import React from 'react';
import { addItem } from '../../store/actions/cart-actions';
import { connect } from 'react-redux';

const ProductSummary = (props) => {

    const addToCart = () => {
        props.addItem({id: '123', title: 'hey!', content: 'body' });
    }

    return (
        <div className="card z-depth-0 product-summary">
            <div className="card-content grey-text text-darker-3">
                <span className="card-title">Product Title</span>
                <p>Price $200</p>
                <p className="grey-text">12cm x 5cm</p>
                <button onClick={() => addToCart()}>ADD TO CART</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (item) => dispatch(addItem(item))
    }
}

export default connect(null, mapDispatchToProps)(ProductSummary);