import React, {Fragment} from 'react';
import './Header.scss';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SignedInLinks from '../SignedInLinks';
import SignedOutLinks from '../SignedOutLinks';

const Header = (props) => {
    const { auth, isAdmin } = props;

    return (
        <Fragment>
            <div className="header-container">
                <img className='logo' src='https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/logo%2Flogo.png?alt=media&token=24d2acb4-4fd9-4590-a5fe-164dd2169f9c' alt=""/>
                <nav className="nav-items">
                    <NavLink className='item' exact to='/' activeClassName='selected'>Home</NavLink>
                    <NavLink className='item' strict to='/products' activeClassName='selected'>Products</NavLink>
                    <NavLink className='item' exact to='/about' activeClassName='selected'>How to Purchase</NavLink>
                    <NavLink className='item' exact to='/contact' activeClassName='selected'>Contact</NavLink>
                </nav>
                <div className="side-icons">
                    <i className="material-icons">search</i>
                    <NavLink exact to='/checkout' className="item"><i className="material-icons">shopping_cart</i></NavLink>
                    { auth.uid ? <SignedInLinks/> : <SignedOutLinks /> }
                    { isAdmin && <NavLink activeClassName="selected" className="dashboard" exact to='/admin'>Admin Dashboard</NavLink>}
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        isAdmin: state.auth.isAdmin
    }
}

export default connect(mapStateToProps)(Header);