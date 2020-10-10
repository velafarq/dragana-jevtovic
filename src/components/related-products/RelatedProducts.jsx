import React, { useEffect, useState } from 'react';
import './RelatedProducts.scss'
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';

const RelatedProducts = ({ designName }) => {
    const [ relatedProducts, setRelatedProducts ] = useState([]);

    useFirestoreConnect([
        { collection: 'products' }
    ]);
    
    const allProducts = useSelector(state => state.firestore.ordered.products);


    useEffect(() => {
        if (allProducts) {
            const filteredByDesign = allProducts.filter(p => p.design === designName);
            
        }
    }, [allProducts, designName])

    const getRandomArray = (products) => {
        const randomInt = Math.floor(Math.random() * (products.length));
        
    }

    return <div><h4>RELATED PRODUCTS</h4></div>
}

export default RelatedProducts;