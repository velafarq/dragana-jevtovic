import React, { useState, useEffect, Fragment } from 'react';
import './DesignDashboard.scss';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import ProductListing from '../../products/ProductListing';
import { Link } from 'react-router-dom';
import { typeOptions, DESIGN_NAMES } from '../../../helpers';
import Spinner from '../../spinner/Spinner';

export const DesignDashboard = (props) => {
    const [ products, setProducts ] = useState([]);
    const [ filteredProducts, setFilteredProducts ] = useState([]);
    const [ selected, setSelected ] = useState('all');
    const [ headerUrl, setHeaderUrl ] = useState('');
    const [ loading, setLoading ] = useState(true);
    useFirestoreConnect([
        { collection: 'products' },
        { collection: 'configurations', doc: 'design_header'}
    ]);

    const allProducts = useSelector(state => state.firestore.ordered.products);
    const header_config = useSelector(
        ({ firestore: { data } }) => data.configurations && data.configurations.design_header
      )
    const designName = props.match.params.design;

    useEffect(() => {
        if (allProducts) {
            const filteredByDesign = allProducts.filter(p => p.categories.includes(designName));
            setProducts(filteredByDesign);
            setFilteredProducts(filteredByDesign);
        }

        if (header_config) {
            const header = header_config[designName] || null;
            setHeaderUrl(header);
        }

        if (allProducts && header_config) {
            setLoading(false);
        }
    }, [allProducts, designName, header_config])

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
        <Fragment>
            {!loading ?
            <Fragment>
                { products && products.length > 0  ? 
                <div className="design">
                    <header className="design__header fade-in" style={{backgroundImage: "url(" + headerUrl + ")"}}></header>
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
                </div> : 
                <div className="empty-message">
                    <div>Check back later for more products!</div>
                    <Link to={'/products'} className="empty-message-link">Go Back</Link>
                </div> }
            </Fragment> : <div className="spinner"><Spinner /></div>
        }
        </Fragment>
        
    )
}

export default DesignDashboard;