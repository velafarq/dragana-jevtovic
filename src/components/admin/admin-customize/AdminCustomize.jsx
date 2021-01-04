import React from 'react';
import './AdminCustomize.scss';
import AdminNav from '../admin-nav/AdminNav'
const AdminCustomize = () => {
    return (
        <section className="admin-customize">
            <AdminNav />
            <div className="header">
                <h2 className="page-title">Customize</h2>
            </div>
        </section>
    )
}

export default AdminCustomize;