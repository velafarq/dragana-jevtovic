import React, { useEffect, useState, Fragment } from 'react';
import './AdminOrder.scss';
import { useFirestoreConnect } from 'react-redux-firebase';
import { connect, useSelector } from 'react-redux';
import AdminOrderProductList from '../admin-order-product-list/AdminOrderProductList';
import { Link } from 'react-router-dom';
import {markOrderAsRead} from '../../../store/actions/admin-actions';

const AdminOrder = (props) => {
    const { markAsRead } = props;
    useFirestoreConnect([
        { collection: 'orders' }
    ]);
    const [ order, setOrder ] = useState(null);
    const orders = useSelector(state => state.firestore.ordered.orders);

    useEffect(() => {
        if (orders && orders.length) {
            const found = orders.find(o => o.id === props.match.params.orderId);
            if (found !== undefined) {
                setOrder(found);
                if (!found.read) {
                    markAsRead({...found, read: true});
                }
            }
        }
    }, [orders, props.match.params.orderId, markAsRead]);

    return (
        <section className="order-page">
            {order && 
                <Fragment>
                    <Link to={'/admin/orders'} className="back">
                        <i className="material-icons">keyboard_arrow_left</i>
                        <span>Back to Orders</span>
                    </Link>
                    <section className="heading">
                        <div className="name">Order Summary for {order.firstName } {order.lastName}</div>
                    </section>
                    <AdminOrderProductList items={order.items} />
                    <div className="customer-details">
                        <div className="address">
                            <h4>Contact Details</h4>
                            <address>
                                <div>{order.firstName} {order.lastName}</div>
                                <div>{order.state}, {order.country}</div>
                                <div>{order.postalCode}</div>
                                <div>{order.phone}</div>
                                <div>{order.email}</div>
                            </address>
                        </div>
                    </div>
                    <div className="customer-message">
                        <h4>Customer Message</h4>
                        <p>{order.message}</p>
                    </div>
                </Fragment>
            }
            
        </section>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        markAsRead: payload => dispatch(markOrderAsRead(payload))
    }
}
export default connect(null, mapDispatchToProps)(AdminOrder);