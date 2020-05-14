import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/auth-actions';

const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <li><button onClick={props.signOut}>Log Out</button></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);