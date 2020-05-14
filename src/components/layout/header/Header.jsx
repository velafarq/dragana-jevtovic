import React from 'react';
import './Header.scss';
import logo from './logo.png';
import { connect } from 'react-redux';
// import SignedInLinks from '../SignedInLinks';
// import SignedOutLinks from '../SignedOutLinks';
const Header = (props) => {
    // const { auth } = props;
    return (
        <div className="header-container">
            {/* { auth.uid ? <SignedInLinks/> : <SignedOutLinks /> } */}
            <img src={logo} alt=""/>
            <ul className="nav-items">
                <li>Home</li>
                <li>Products</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Header);