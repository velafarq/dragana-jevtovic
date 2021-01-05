import React, { Fragment, useEffect, useState } from 'react';
import './AdminOrders.scss';

import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import AdminNav from '../admin-nav/AdminNav';
const AdminOrders = () => {
    useFirestoreConnect([
        { collection: 'orders' }
    ]);

    const allOrders = useSelector(state => state.firestore.ordered.orders);

    const [displayOrders, setDisplayOrders] = useState([]);
    const [editable, setEditable] = useState(null);
    const [drawer, setDrawer] = useState(false);

    useEffect(() => {
        setDisplayOrders(allOrders);
    }, [allOrders]);

    console.log(allOrders)

    const row = (order) => (
        <Fragment key={order.id}>
            <div className='box'>{order.created_at.toDate().toDateString()}</div>
            <div className='box'>{order.firstName} {order.lastName}</div>
            <div className='box'>{order.email}</div>
            <div className='box'>{order.phone}</div>
            <div className='box table-actions'>
                <i className="material-icons edit" onClick={() => viewOrder(order)}>edit</i>
                <i className="material-icons delete" onClick={() => deleteOrder(order.id)}>delete_forever</i>
            </div>
        </Fragment>
    );
    
    const toggleDrawer = () => {
        if (drawer) {
            setEditable(null);
        }
        setDrawer(!drawer);
     }

    const viewOrder = (order) => {

    }

    const deleteOrder = (order_id) => {

    }

    const generateTable = (orders) => {
        return orders.map((order) => row(order));
    }

    return (
        <Fragment>
            { displayOrders &&
                <section className="admin-orders">
                <AdminNav />
                <div className="header">
                    <h2 className="page-title">Orders</h2>
                </div>
                <div className='table'>
                        <div className="box title">Created At</div>
                        <div className="box title">Name</div>
                        <div className="box title">Email</div>
                        <div className="box title">Phone</div>
                        <div className="box title"></div>
                        {generateTable(displayOrders)}
                    </div>
                    <div className={drawer ? 'drawer active' : 'drawer'}>
                    </div>
                </section>
            }
        </Fragment>
       
    )
}

export default AdminOrders;

// Checkout
// Fill out contact form before submitting order
    // Contact form needS:
        //Name, surname, email, phone number, country, anything else you'd like us to know?
// Or Login/signup
// Add country to signup
