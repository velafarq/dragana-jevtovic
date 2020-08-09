import React from 'react';
import ProductList from '../products/ProductList';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import './ProductDashboard.scss';
import ProductBoxes from '../home/product-boxes/ProductBoxes';

const ProductDashboard = (props) => {
    useFirestoreConnect([
        { collection: 'products' }
    ]);
    
    const products = useSelector(state => state.firestore.ordered.products);
    console.log(products);
    
    return (
        <div className="product-dashboard container">
            <ProductBoxes layout='col' />
            <ProductList products={products}></ProductList>
        </div>
    )
    
}

export default ProductDashboard;