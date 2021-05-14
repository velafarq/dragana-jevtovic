import React, {Fragment, useEffect, useState} from 'react';
import './Header.scss';
import { connect, useSelector} from 'react-redux';
import { NavLink } from 'react-router-dom';
import SignedInLinks from '../SignedInLinks';
import SignedOutLinks from '../SignedOutLinks';
import {changeCurrency} from '../../../store/actions/currency-actions';
import {useFirestoreConnect} from 'react-redux-firebase';

const Header = (props) => {
    const { auth, isAdmin, cartItems} = props;
    useFirestoreConnect([
        { collection: 'contactForms' }
    ]);
    const messages  = useSelector(state => state.firestore.ordered.contactForms);
    const [unreadCount, setUnreadCount] = useState(null);
    // const handleCurrencyChange = (e) => {
    //     updateCurrency(e.target.value)
    // }
    useEffect(() => {
        if (isAdmin && messages) {
            const unread = messages.filter(m => !m.read);
            setUnreadCount(unread.length);
        }
    }, [messages, unreadCount, isAdmin])

    return (
        <Fragment>
            <div className="header-container">
                <img className='logo' src='https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/logo%2Flogo.png?alt=media&token=24d2acb4-4fd9-4590-a5fe-164dd2169f9c' alt=""/>
                <nav className="nav-items">
                    <NavLink className='item' exact to='/' activeClassName='selected'>Home</NavLink>
                    <NavLink className='item' strict to='/products' activeClassName='selected'>Products</NavLink>
                    <NavLink className='item' exact to='/about' activeClassName='selected'>How to Purchase</NavLink>
                    <NavLink className='item' exact to='/gallery' activeClassName='selected'>Gallery</NavLink>
                    <NavLink className='item' exact to='/contact' activeClassName='selected'>Contact</NavLink>
                </nav>
                <div className="side-icons">
                    <NavLink exact to='/checkout' className="item cart">
                        <i className="material-icons">shopping_cart</i>
                        {cartItems && cartItems.length ? <div className="cart-number">{cartItems.length}</div> : null}
                    </NavLink>
                    {/* <select name="currency" className="currency" value={currency} onChange={(event) => handleCurrencyChange(event)}>
                        <option value="usd">USD</option>
                        <option value="gbp">GBP</option>
                        <option value="zar">ZAR</option>
                    </select> */}
                    {isAdmin && 
                        <React.Fragment>
                            {/* { auth.uid ? <SignedInLinks/> : <SignedOutLinks /> } */}
                           
                            <NavLink exact to="/admin/messages" className="item cart">
                                <i className="material-icons">email</i>
                                {unreadCount ? <div className="cart-number">{unreadCount}</div> : null}
                            </NavLink>
                            <NavLink activeClassName="selected" className="dashboard" exact to='/admin'>
                                <i className="material-icons">settings</i>
                            </NavLink>
                        </React.Fragment>}
                </div>
            </div>
        </Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateCurrency: (currency) => dispatch(changeCurrency(currency))
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        isAdmin: state.auth.isAdmin,
        cartItems: state.cart.items,
        currency: state.currency.currency
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);