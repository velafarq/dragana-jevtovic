import React, { useState, useEffect } from 'react';
import './DesignDashboard.scss';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import ProductListing from '../../products/ProductListing';
import { Link } from 'react-router-dom';

export const DesignDashboard = (props) => {
    const [ products, setProducts ] = useState([]);
    const [ filteredProducts, setFilteredProducts ] = useState([]);
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
            setFilteredProducts(filteredByDesign);
            console.log(filteredByDesign)
        }
    }, [allProducts, productDesignName])

    const filterByCategory = (category) => {
        const filtered = products.filter(product => product.type === category);
        console.log(filtered, category)
        setFilteredProducts(filtered);
    }   
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
                        <li onClick={() => filterByCategory('plates')}>Plates</li>
                        <li onClick={() => filterByCategory('bowls')}>Bowls</li>
                        <li onClick={() => filterByCategory('teapots')}>Tea Pots</li>
                        <li onClick={() => filterByCategory('cups_saucers')}>Cups and Saucers</li>
                        <li onClick={() => filterByCategory('mugs')}>Mugs</li>
                        <li onClick={() => filterByCategory('large_servers')}>Large Servers</li>
                        <li onClick={() => filterByCategory('condiments')}>Condiments</li>
                    </ul>

                </div>

                <div className="design__content__listings">{filteredProducts.map((product, i) => 
                        <Link to={`/products/${product.id}`} key={product.id} className="design__content__listings__listing">
                            <ProductListing product={product} />
                        </Link>
                    )}
                </div>

            </section>
        </div>
     : 
        
        <div className="empty-message">Check back later for more products!</div>
    )
}

export default DesignDashboard;