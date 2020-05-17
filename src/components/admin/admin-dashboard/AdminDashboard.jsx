import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ProductCreator from '../product-creator/ProductCreator';
import AdminProducts from '../admin-products/AdminProducts';

const AdminDashboard = (props) => {
    const { auth } = props;
    const [drawer, setDrawer] = useState(false);

   const toggleDrawer = (e) => {
        e.preventDefault();
        setDrawer(!drawer);
    }
    return (
        <React.Fragment>
            { auth.isAdmin ?
                <div className="admin-container">
                    <button onClick={(e) => toggleDrawer(e)}>Create new product</button>
                    <AdminProducts />
                    <div className={drawer ? 'drawer active' : 'drawer'}>
                        <ProductCreator toggleDrawer={toggleDrawer} />
                    </div>
                </div> : 
                <Redirect to='/signin' /> 
            }
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(AdminDashboard);