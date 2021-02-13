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
        african_elephant: 'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2F20200227_101040.jpg?alt=media&token=a10fbe7b-6f47-4a74-8200-ca49d6e0603c',
        royal_african: 'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2F20200911_104618.jpg?alt=media&token=b25af7b8-41de-4be1-8c9f-b97a4b17a063',
        blue_guinea: 'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2F20190715_134551.jpg?alt=media&token=dd9abb80-dafc-460d-8d3c-11eaacd699c2',
        african_velvet: 'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2F20200913_160304.jpg?alt=media&token=29d62634-bebc-4238-b14d-1f642183e0ea',
        oceans_feather: 'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2Foceans-feathers-slider.JPG?alt=media&token=110083ff-3d26-49bc-86c8-25527f081e32',
        new_creations: 'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fproduct-boxes%2Fnew-creations.jpg?alt=media&token=5c22d1e8-ae86-488d-a586-09538ccd384e'
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
            <header className="design__header" style={{backgroundImage: "url(" + headers[designName] + ")"}}></header>
            <div className="design__breadcrumbs center-content">
                    <Link className="link" to={'/'}>Home</Link> / <Link className="link" to={'/products'}>Products</Link> / <span className="active-link">{DESIGN_NAMES[designName]}</span>
                </div>
            <div className="heading-text center-content">{DESIGN_NAMES[designName]}</div>

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