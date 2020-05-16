import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ProductCreator from '../product-creator/ProductCreator';

const AdminDashboard = (props) => {
    const { auth } = props;
    return (
        <React.Fragment>
            { auth.isAdmin ? 
                <ProductCreator /> : 
                <Redirect to='/signin' /> }
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(AdminDashboard);