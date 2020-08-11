import React, { useState, useEffect } from 'react';
import './ProductDesignDashboard.scss';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';

export const ProductDesignDashboard = (props) => {
    const [ products, setProducts ] = useState([]);
    useFirestoreConnect([
        { collection: 'products' }
    ]);

    const allProducts = useSelector(state => state.firestore.ordered.products);
    const productDesign = props.match.params.id;

    useEffect(() => {
        if (allProducts) {
            const filteredByDesign = allProducts.filter(p => p.design === productDesign);
            setProducts(filteredByDesign);
        }
    }, [allProducts, productDesign])

    
    return (
        <div></div>
    )
}