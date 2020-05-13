import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Cart = (props) => {
    console.log(props);
    const { items } = props;
    
    return (
        <ul className="right">
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>
                <i className="material-icons">shopping_cart</i></NavLink></li>
        </ul>
    )
}
const mapStateToProps = (state) => {
    return {
        items: state.cart.items
    }
}

export default connect(mapStateToProps)(Cart);