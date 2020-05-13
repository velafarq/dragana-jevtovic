import React from 'react';
import ProductList from '../products/ProductList';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';

const ProductDashboard = (props) => {
    useFirestoreConnect([
        { collection: 'products' }
    ]);
    
    const products = useSelector(state => state.firestore.ordered.products);
    console.log(products);
    
    return (
        <div className="product-dashboard container">
            <ProductList products={products}></ProductList>
        </div>
    )
    
}

export default ProductDashboard;