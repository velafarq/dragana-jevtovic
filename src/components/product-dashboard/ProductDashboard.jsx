import React, { Component } from 'react';
import ProductList from '../products/ProductList';

class ProductDashboard extends Component {
    render() {
        return (
            <div className="product-dashboard container">
                <ProductList></ProductList>
            </div>
        )
    }
}

export default ProductDashboard;