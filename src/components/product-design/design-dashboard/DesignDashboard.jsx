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
    const headers = {
        african_elephant: 'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fproduct-categories%2Fheaders%2Fafrica-elephant-header.png?alt=media&token=5a11daec-0710-4e6c-bfb3-d014e1892a78',
        royal_african: 'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fproduct-categories%2Fheaders%2Froyal-african-header.png?alt=media&token=3ff815b3-a7a5-4dfb-b33b-246ea6b03e28',
        blue_guinea: 'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/misc%2Fblue-guinea-slide-faded.png?alt=media&token=e6e2d5d7-cb82-4c2e-8d8a-ceddeff53a1d',
        african_velvet: 'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fproduct-categories%2Fheaders%2Fbrown-feathers-header.png?alt=media&token=fe293550-5aa1-4336-b567-75ba77c89903',
        oceans_feather: `https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fproduct-categories%2Fheaders%2Ftwo-oceans'-feathers-header.png?alt=media&token=d70290a9-a34f-4a8a-a710-189479441a3a`
    }

    useEffect(() => {
        if (allProducts) {
            const filteredByDesign = allProducts.filter(p => p.categories.includes(designName));
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
            <img className="design__hero" src={headers[designName]} alt={`Dragana Jevtovic ${DESIGN_NAMES[designName]} Design Cape Town South Africa Pottery`} />

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