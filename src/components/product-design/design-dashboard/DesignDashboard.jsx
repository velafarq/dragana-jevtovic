import React, { useState, useEffect } from 'react';
import './DesignDashboard.scss';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import ProductListing from '../../products/ProductListing';

export const DesignDashboard = (props) => {
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
        <div className="design">
            <header className="design__header">
                <img src={header_img.url} alt={header_img.alt} />
                <div className="design__header__breadcrumbs center-content">
                    Home / Products / Blue Guinea Fowl
                </div>
                <div className="heading-text center-content">Blue Guinea Fowl</div>
            </header>

            <section className="design__content center-content">
                <div className="design__content__nav-box">
                    <ul>
                        <li>All</li>
                        <li>Plates</li>
                        <li>Bowls</li>
                        <li>Tea Pots</li>
                        <li>Cups and Saucers</li>
                        <li>Mugs</li>
                        <li>Large Servers</li>
                        <li>Condiments</li>
                    </ul>

                </div>

                <div className="design__content__listings"></div>

            </section>
        </div>
     : 
        
        <div className="empty-message">Check back later for more products!</div>
    )
}

export default DesignDashboard;