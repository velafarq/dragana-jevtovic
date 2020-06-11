import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/auth-actions';
import './auth.scss';

const SignedInLinks = (props) => {
    return (
        <div className="auth-links" onClick={props.signOut}>Log Out</div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);