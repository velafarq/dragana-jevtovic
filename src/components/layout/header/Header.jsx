import React, {Fragment} from 'react';
import './Header.scss';
import { connect } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
// import SignedInLinks from '../SignedInLinks';
// import SignedOutLinks from '../SignedOutLinks';
const Header = (props) => {
    // const { auth } = props;
    const location = useLocation();
    const isAdmin = location.pathname.includes('admin');

    return (
        <Fragment>
            {!isAdmin && <div className="header-container">
            {/* { auth.uid ? <SignedInLinks/> : <SignedOutLinks /> } */}
                <img className='logo' src='https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/logo%2Flogo.png?alt=media&token=24d2acb4-4fd9-4590-a5fe-164dd2169f9c' alt=""/>
                <nav className="nav-items">
                    <NavLink className='item' exact to='/' activeClassName='selected'>HOME</NavLink>
                    <NavLink className='item' strict to='/products' activeClassName='selected'>PRODUCTS</NavLink>
                    <NavLink className='item' exact to='/about' activeClassName='selected'>ABOUT</NavLink>
                    <NavLink className='item' exact to='/contact' activeClassName='selected'>CONTACT</NavLink>
                </nav>
                <div className="side-icons">
                    <i className="material-icons">search</i>
                    <NavLink exact to='/checkout' className="item"><i className="material-icons">shopping_cart</i></NavLink>
                </div>
            </div>}
        </Fragment>
        
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Header);