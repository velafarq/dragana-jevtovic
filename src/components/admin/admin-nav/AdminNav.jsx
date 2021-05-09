import React from 'react';
import './AdminNav.scss';
import { NavLink } from 'react-router-dom';

const AdminNav = () => {
    return (
        <section className="admin-nav">
            <NavLink exact to={'/admin/products'} activeClassName='selected'>Products</NavLink>
            <NavLink exact to={'/admin/orders'} activeClassName='selected'>Orders</NavLink>
            <NavLink exact to={'/admin/messages'} activeClassName='selected'>Messages</NavLink>
            <NavLink exact to={'/admin/customize'} activeClassName='selected'>Customize</NavLink>
        </section>
    )
}

export default AdminNav;