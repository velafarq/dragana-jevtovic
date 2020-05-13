import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import Cart from './Cart';

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                {/* <Link to="/" className="brand-logo">Dragana Jevtovic</Link> */}
                
                <SignedInLinks></SignedInLinks>
                <SignedOutLinks></SignedOutLinks>
                <Link to="/products">Products</Link>
                <Cart></Cart>
            </div>
        </nav>
    )
}

export default Navbar;