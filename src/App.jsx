import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
import HomeCore from './components/home/home-core/HomeCore';
import Footer from './components/layout/footer/Footer';
import DesignDashboard from './components/product-design/design-dashboard/DesignDashboard';
import About from './components/about/About';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Contact from './components/contact/Contact';
import AdminProducts from './components/admin/admin-products/AdminProducts';
import AdminOrders from './components/admin/admin-orders/AdminOrders';
// import AdminMessages from './components/admin/admin-messages/AdminMessages';
import SubmitOrder from './components/submit-order/SubmitOrder';
import AdminCustomize from './components/admin/admin-customize/AdminCustomize';
import AdminOrder from './components/admin/admin-order/AdminOrder';
import Gallery from './components/gallery/Gallery';

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
                <ScrollToTop />
                <div className="App">
                    <Header />
                    <Switch>
                        <Route exact path='/' component={HomeCore} />
                        <Route exact path='/products' component={ProductDashboard} />
                        <Route path='/products/:id' component={ProductDetails} />
                        <Route path='/signin' component={SignIn} />
                        <Route path='/signup' component={SignUp} />
                        <Route exact path='/checkout' component={Checkout} />
                        <Route exact path='/checkout/submit' component={SubmitOrder} />

                        <Route path='/designs/:design' component={DesignDashboard} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/contact' component={Contact} />
                        <Route exact path='/gallery' component={Gallery}/>
                        {/* admin routes */}
                        <Route exact path='/admin' component={AdminDashboard} />
                        <Route exact path='/admin/products' component={AdminProducts} />
                        <Route exact path='/admin/orders' component={AdminOrders} />
                        {/* <Route exact path='/admin/messages' component={AdminMessages} /> */}
                        <Route path='/admin/orders/:orderId' component={AdminOrder} />
                        <Route exact path='/admin/customize' component={AdminCustomize} />


                    </Switch>
                    <Footer />
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
