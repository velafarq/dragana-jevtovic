import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import './ProductDashboard.scss';
import ProductBoxes from '../home/product-boxes/ProductBoxes';
import ProductListing from '../products/ProductListing';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {hyphenateText} from '../../helpers';

const ProductDashboard = (props) => {
    const [custom, setCustom] = useState([]);
    const [mugs, setMugs] = useState([]);
    const [largeServers, setLargeServers] = useState([]);
    const [teapots, setTeapots] = useState([]);
    const [plates, setPlates] = useState([]);
    const [bowls, setBowls] = useState([]);
    const [sets, setSets] = useState([]);

    useFirestoreConnect([
        { collection: 'products', where: ['hidden', '==', false] }
    ]);
    
    const products = useSelector(state => state.firestore.ordered.products);
    useEffect(() => {
        if (products) {
            const mugs = [];
            const largeServers = [];
            const teapots = [];
            const plates = [];
            const bowls = [];
            const custom = [];
            const sets = [];

            products.forEach(product => {
                switch (product.type) {
                    case 'large_servers':
                        largeServers.push(product);
                        break;
                    case 'cups_saucers':
                    case 'mugs':
                    case 'jugs':
                        mugs.push(product);
                        break;
                    case 'teapots':
                        teapots.push(product);
                        break;
                    case 'plates':
                        plates.push(product);
                        break;
                    case 'bowls':
                        bowls.push(product);
                        break;
                    case 'sets':
                        sets.push(product);
                        break;
                    default:
                        break;
                }
            });

            products.forEach(product => {
                if (product.categories.includes('custom')) {
                    custom.push(product);
                }
            });

            setBowls(bowls);
            setPlates(plates);
            setMugs(mugs);
            setLargeServers(largeServers);
            setCustom(custom);
            setTeapots(teapots);
            setSets(sets);
        }
    }, [products]);

    const renderProductRow = (products, title) => {
        return (
            <React.Fragment>
                <div className="product-dashboard__category-title heading-text">
                    {title}
                </div>
                <div className="product-dashboard__products-carousel no-margin">{products.map((product, i) => 
                        <Link to={`/products/${hyphenateText(product.name)}/${product.id}`} key={product.id} className="product-dashboard__products-carousel__product">
                            <ProductListing product={product} />
                        </Link>
                    )}
                </div>
            </React.Fragment>
        );
    }

    return (
        <div className="product-dashboard container header-padding">
            <Helmet>
                <title>Products | Dragana Jevtovic Ceramics</title>
                <meta name="description" content="Browse a wide variety of African inspired ceramics by Dragana Jevtovic" />
                <link rel="canonical" href="https://draganajevtovic.com/products" />
            </Helmet>
            <h1 className="heading-text product-dashboard__title">Choose a Style</h1>
            <ProductBoxes layout='col' />
            {sets.length > 0 && renderProductRow(sets, "Place Settings & Sets")}
            {custom.length > 0 && renderProductRow(custom, 'Exclusive Pieces')}
            {mugs.length > 0 && renderProductRow(mugs, 'Mugs, Cups & Saucers and Jugs')}
            {bowls.length > 0 && renderProductRow(bowls, 'Bowls')}
            {plates.length > 0 && renderProductRow(plates, 'Plates')}
            {teapots.length > 0 && renderProductRow(teapots, 'Teapots')}
            {largeServers.length > 0 && renderProductRow(largeServers, 'Large Servers')}
            <div className="contact-love">
                <h2 className="heading-text">From South Africa with Love</h2>
                <Link to={'/contact'} className="client-button">CONTACT</Link>
            </div>
        </div>
    )
}

export default ProductDashboard;