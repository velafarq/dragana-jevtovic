import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import ProductDashboard from './components/product-dashboard/ProductDashboard'
import ProductDetails from './components/products/ProductDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Checkout from './components/checkout/Checkout';
import Header from './components/layout/header/Header';
import { connect } from 'react-redux';

function App(props) {
    const { auth } = props;
    if (auth.isLoaded) {
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
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
    return null;
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(App);
