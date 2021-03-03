import React, { Fragment, useEffect, useState } from 'react';
import './AdminOrders.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import AdminNav from '../admin-nav/AdminNav';
const AdminOrders = () => {
    useFirestoreConnect([
        { collection: 'orders' }
    ]);

    const allOrders = useSelector(state => state.firestore.ordered.orders);
    const [displayOrders, setDisplayOrders] = useState([]);

    useEffect(() => {
        setDisplayOrders(allOrders);
    }, [allOrders]);

    console.log(allOrders)

    const row = (order) => (
        <Fragment key={order.id}>
            <Link to={`/admin/orders/${order.id}`} className='box 1'>{order.created_at.toDate().toDateString()}</Link>
            <Link to={`/admin/orders/${order.id}`} className='box 2'>{order.firstName} {order.lastName}</Link>
            <Link to={`/admin/orders/${order.id}`} className='box 3'>{order.email}</Link>
            <Link to={`/admin/orders/${order.id}`} className='box 4'>{order.phone}</Link>
            <Link to={`/admin/orders/${order.id}`} className='box 5 table-actions'></Link>
        </Fragment>
    );
    

    const generateTable = (orders) => {
        return orders.map((order) => row(order));
    }

    return (
        <Fragment>
            { displayOrders &&
                <section className="admin-orders">
                <AdminNav />
                <div className='table'>
                        <div className="box title">Created At</div>
                        <div className="box title">Name</div>
                        <div className="box title">Email</div>
                        <div className="box title">Phone</div>
                        <div className="box title"></div>
                        {generateTable(displayOrders)}
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
