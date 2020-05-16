import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const AdminDashboard = (props) => {
    const { auth } = props;
    return (
        <React.Fragment>
            { auth.isAdmin ? <div>in admin dashboard</div> : <Redirect to='/signin' /> }
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(AdminDashboard);