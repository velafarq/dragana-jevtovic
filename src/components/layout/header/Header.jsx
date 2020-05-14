import React from 'react';
import './Header.scss';
import logo from './logo.png';
import { connect } from 'react-redux';

const Header = (props) => {
    return (
        <div className="header-container">
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
    console.log(state);
    return {

    }
}
export default connect(mapStateToProps)(Header);