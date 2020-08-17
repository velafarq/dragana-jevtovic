import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import './ProductDashboard.scss';
import ProductBoxes from '../home/product-boxes/ProductBoxes';
import ProductListing from '../products/ProductListing';
import { Link } from 'react-router-dom';

const ProductDashboard = (props) => {
    const [custom, setCustom] = useState([]);
    const [mugs, setMugs] = useState([]);
    const [largeServers, setLargeServers] = useState([]);
    const [teapots, setTeapots] = useState([]);
    const [plates, setPlates] = useState([]);
    const [bowls, setBowls] = useState([]);

    useFirestoreConnect([
        { collection: 'products' }
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

            products.forEach(product => {
                switch (product.type) {
                    case 'large_servers':
                        largeServers.push(product);
                        break;
                    case 'cups_saucers':
                    case 'mugs': 
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
                    default:
                        break;
                }
            });

            products.forEach(product => {
                if (product.design === 'custom') {
                    custom.push(product);
                }
            });

            setBowls(bowls);
            setPlates(plates);
            setMugs(mugs);
            setLargeServers(largeServers);
            setCustom(custom);
            setTeapots(teapots);
        }
    }, [products]);

    const renderProductRow = (products, title) => {
        return (
            <React.Fragment>
                <div className="product-dashboard__category-title heading-text">
                    {title}
                </div>
                <div className="product-dashboard__products-carousel">{products.map((product, i) => 
                        <Link to={`/products/${product.id}`} key={product.id} className="product-dashboard__products-carousel__product">
                            <ProductListing product={product} />
                        </Link>
                    )}
                </div>
            </React.Fragment>
        );
    }

    return (
        <div className="product-dashboard container">
            <h1 className="heading-text product-dashboard__title">Choose a Style</h1>
            <ProductBoxes layout='col' />
            {custom.length > 0 && renderProductRow(custom, 'Exclusive Pieces')}
            {mugs.length > 0 && renderProductRow(mugs, 'Mugs')}
            {bowls.length > 0 && renderProductRow(bowls, 'Mugs')}
            {plates.length > 0 && renderProductRow(plates, 'Mugs')}
            {teapots.length > 0 && renderProductRow(teapots, 'Mugs')}
            {largeServers.length > 0 && renderProductRow(largeServers, 'Large Servers')}
        </div>
    )
}

export default ProductDashboard;