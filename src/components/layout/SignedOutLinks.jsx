import React from 'react';
import { NavLink } from 'react-router-dom';
import './auth.scss';
const SignedOutLinks = () => {
    return (
        <div className="auth-links"><NavLink to='/signin'>Login</NavLink></div>
    )
}

export default SignedOutLinks;