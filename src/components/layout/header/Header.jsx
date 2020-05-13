import React from 'react';
import './Header.scss';
import logo from './logo.png';
const Header = () => {
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

export default Header;