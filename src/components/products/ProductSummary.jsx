import React from 'react';
import { addItem } from '../../store/actions/cart-actions';
import { connect } from 'react-redux';

const ProductSummary = (props) => {
    const {
        addItem, 
        product
    } = props;

    const addToCart = () => {
        addItem({id: '123', title: 'hey!', content: 'body' });
    }

    return (
        <div className="card z-depth-0 product-summary">
            <div className="card-content grey-text text-darker-3">
                <span className="card-title">{product.name}</span>
                <p>{product.price}</p>
                <p className="grey-text">{product.description}</p>
                <button className='client-button' Click={() => addToCart()}>ADD TO CART</button>
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