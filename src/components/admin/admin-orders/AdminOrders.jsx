import React from 'react';
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
    console.log(allOrders)

    return (
        <section className="admin-orders">
            <AdminNav />
            <div className="header">
                <h2 className="page-title">Orders</h2>
            </div>
        </section>
    )
}

export default AdminOrders;

// Checkout
// Fill out contact form before submitting order
    // Contact form needS:
        //Name, surname, email, phone number, country, anything else you'd like us to know?
// Or Login/signup
// Add country to signup
