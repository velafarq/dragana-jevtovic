import React from 'react';
import './Header.scss';
import { connect } from 'react-redux';
// import SignedInLinks from '../SignedInLinks';
// import SignedOutLinks from '../SignedOutLinks';
const Header = (props) => {
    // const { auth } = props;
    return (
        <div className="header-container">
            {/* { auth.uid ? <SignedInLinks/> : <SignedOutLinks /> } */}
            <img src='https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/logo%2Flogo.png?alt=media&token=24d2acb4-4fd9-4590-a5fe-164dd2169f9c' alt=""/>
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