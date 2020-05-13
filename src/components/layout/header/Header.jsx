import React from 'react';
import './Header.scss';
import logo from './Dragana-Jevtovic-Logo.png';
const Header = () => {
    return (
        <div className="header-container">
            <img src={logo} alt=""/>
        </div>
    )
}

export default Header;