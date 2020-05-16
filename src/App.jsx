import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import ProductDashboard from './components/product-dashboard/ProductDashboard'
import ProductDetails from './components/products/ProductDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Checkout from './components/checkout/Checkout';
import Header from './components/layout/header/Header';
import { connect } from 'react-redux';
import { isAdminWhiteList } from './helpers';
import { isAdmin } from './store/actions/auth-actions';
import AdminDashboard from './components/admin/admin-dashboard/AdminDashboard';

function App(props) {
    const { fbAuth, isAdmin, localAuth } = props;

    useEffect(() => {
        if (fbAuth.isLoaded) {
            if (fbAuth.uid && isAdminWhiteList(fbAuth.uid)) {
                isAdmin(true);
            } else {
                isAdmin(false);
            }
        }
    }, [fbAuth, isAdmin]);

    if (fbAuth.isLoaded && localAuth.isLoaded) {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/products' component={ProductDashboard} />
                        <Route path='/products/:id' component={ProductDetails} />
                        <Route path='/signin' component={SignIn} />
                        <Route path='/signup' component={SignUp} />
                        <Route path='/checkout' component={Checkout} />
                        <Route path='/admin' component={AdminDashboard} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
    return null;
}

const mapStateToProps = (state) => {
    return {
        fbAuth: state.firebase.auth,
        localAuth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        isAdmin: payload => dispatch(isAdmin(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
