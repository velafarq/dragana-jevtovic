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
    const productDesignName = props.match.params.design;
    const header_img = {
        url: 'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/misc%2Fblue-guinea-slide-faded.png?alt=media&token=e6e2d5d7-cb82-4c2e-8d8a-ceddeff53a1d',
        alt: 'Dragana Jevtovic Blue Guinea Fowl Design Cape Town South Africa Pottery'
    }
    useEffect(() => {
        if (allProducts) {
            const filteredByDesign = allProducts.filter(p => p.design === productDesignName);
            setProducts(filteredByDesign);
            console.log(filteredByDesign)
        }
    }, [allProducts, productDesignName])

    
    return (
        products && products.length > 0  ? 
        <div className="product-design">
            <header className="product-design__header">
                <img src={header_img.url} alt={header_img.alt} />
                <div className="product-design__header__breadcrumbs center-content">
                    Home / Products / Blue Guinea Fowl
                </div>
                <div className="heading-text center-content">Blue Guinea Fowl</div>
            </header>

            <section className="product-design__content center-content">
                <div className="product-design__content__nav-box">
                    <ul>
                        <li>All</li>
                        <li>Cups and Saucers</li>
                        <li>Dishes</li>
                        <li>Egg Cups</li>
                        <li>Jugs</li>
                        <li>Mugs</li>
                        <li>Plates</li>
                        <li>Teapots</li>
                        <li>Vases</li>
                    </ul>

                </div>
            </section>
        </div>
     : 
        
        <div className="empty-message">Check back later for more products!</div>
    )
}

export default ProductDesignDashboard;