import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/home/Home';
import ProductDashboard from './components/product-dashboard/ProductDashboard'
import ProductDetails from './components/products/ProductDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Checkout from './components/checkout/Checkout';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
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

export default App;
