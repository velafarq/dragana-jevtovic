import React, { useState, useEffect } from 'react';
import './DesignDashboard.scss';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import ProductListing from '../../products/ProductListing';
import { Link } from 'react-router-dom';
import { typeOptions, DESIGN_NAMES, DESIGN_HERO_IMAGES } from '../../../helpers';

export const DesignDashboard = (props) => {
    const [ products, setProducts ] = useState([]);
    const [ filteredProducts, setFilteredProducts ] = useState([]);
    const [ selected, setSelected ] = useState('all');

    useFirestoreConnect([
        { collection: 'products' }
    ]);

    const allProducts = useSelector(state => state.firestore.ordered.products);
    const designName = props.match.params.design;
    const header_img = {
        url: 'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/misc%2Fblue-guinea-slide-faded.png?alt=media&token=e6e2d5d7-cb82-4c2e-8d8a-ceddeff53a1d',
        alt: 'Dragana Jevtovic Blue Guinea Fowl Design Cape Town South Africa Pottery'
    }

    useEffect(() => {
        if (allProducts) {
            const filteredByDesign = allProducts.filter(p => p.design === designName);
            setProducts(filteredByDesign);
            setFilteredProducts(filteredByDesign);
        }
    }, [allProducts, designName])

    const filterByCategory = (category) => {
        if (category === 'all') {
            setSelected(category);
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(product => product.type === category);
            setSelected(category);
            setFilteredProducts(filtered);
        }
        
    }

    const renderListItem = (type, i) => {
        return (
            <li key={i} className={selected === type.value ? 'selected': ''} onClick={() => filterByCategory(type.value)}>{type.label}</li>
        )
    }

    return (
        products && products.length > 0  ? 
        <div className="design">
            <img className="design__hero" src={DESIGN_HERO_IMAGES[designName].url} alt={DESIGN_HERO_IMAGES[designName].alt} />

            <header className="design__header">
                <div className="design__header__breadcrumbs center-content">
                    <Link className="link" to={'/'}>Home</Link> / <Link className="link" to={'/products'}>Products</Link> / <span className="active-link">{DESIGN_NAMES[designName]}</span>
                </div>
                <div className="heading-text center-content">{DESIGN_NAMES[designName]}</div>
            </header>

            <section className="design__content center-content">
                <div className="design__content__nav-box">
                    <ul>
                        { typeOptions && typeOptions.map((type, i) => renderListItem(type, i))}
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
        <div className="empty-message">
            <div>Check back later for more products!</div>
            <Link to={'/products'} className="empty-message-link">Go Back</Link>
        </div>
    )
}

export default DesignDashboard;