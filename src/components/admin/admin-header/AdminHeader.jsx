import React, {Fragment, useEffect, useState} from 'react';
import './AdminHeader.scss';
import { connect, useSelector} from 'react-redux';
import { NavLink } from 'react-router-dom';
import {changeCurrency} from '../../../store/actions/currency-actions';
import {useFirestoreConnect} from 'react-redux-firebase';
import SignedInLinks from '../../layout/SignedInLinks';

const AdminHeader = (props) => {
    const { auth, isAdmin } = props;
    useFirestoreConnect([
        { collection: 'contactForms' },
        { collection: 'orders' }
    ]);
    const messages  = useSelector(state => state.firestore.ordered.contactForms);
    const orders  = useSelector(state => state.firestore.ordered.orders);

    const [unreadCount, setUnreadCount] = useState(null);
    const [unreadOrderCount, setUnreadOrderCount] = useState(null);

    useEffect(() => {
        if (messages) {
            const unread = messages.filter(m => !m.read);
            setUnreadCount(unread.length);
        }
        if ( orders) {
            const unread_orders = orders.filter(o => !o.read);
            console.log(unread_orders);
            setUnreadOrderCount(unread_orders.length);
        }
    }, [messages, unreadCount, isAdmin, unreadOrderCount, orders])

    return (
        <Fragment>
            {/* <SignedInLinks/> */}
            <NavLink exact to="/admin/orders" className="admin-icon">
                <i className="material-icons">request_quote</i>
                {unreadOrderCount ? <div className="icon-number">{unreadOrderCount}</div> : null}
            </NavLink>
            <NavLink exact to="/admin/messages" className="admin-icon">
                <i className="material-icons">email</i>
                {unreadCount ? <div className="icon-number">{unreadCount}</div> : null}
            </NavLink>
            <NavLink activeClassName="selected" className="dashboard" exact to='/admin'>
                <i className="material-icons">settings</i>
            </NavLink>
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

export default connect(mapStateToProps, mapDispatchToProps)(AdminHeader);