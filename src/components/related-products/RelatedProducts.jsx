import React, { useEffect, useState } from 'react';
import './RelatedProducts.scss'
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import ProductListing from '../products/ProductListing';

const RelatedProducts = ({ categories, currentProductId }) => {
    const [ relatedProducts, setRelatedProducts ] = useState([]);

    useFirestoreConnect([
        { collection: 'products', where: ['hidden', '==', false] }
    ]);
    
    const allProducts = useSelector(state => state.firestore.ordered.products);



    useEffect(() => {
        if (allProducts) {

            const getRandomArray = (products) => {
                const shuffled = products.sort(() => 0.5 - Math.random());
                if (currentProductId) {
                    const idx = shuffled.findIndex(p => p.id === currentProductId)
                    if (idx !== -1) {
                        shuffled.splice(idx, 1);
                    }
                }
                return shuffled.slice(0, 5);
            }
            const filteredByDesign = allProducts.filter(p => {
                return p.categories.some(cat => categories.includes(cat))
            });

            const randomArray = getRandomArray(filteredByDesign);
            setRelatedProducts(randomArray);
        }
    }, [allProducts, categories, currentProductId]);

    return <React.Fragment>
        { relatedProducts.length ?
        <div className="related-products">
            <h4>RELATED PRODUCTS</h4>
            <div className="product-dashboard__products-carousel">{relatedProducts.map((product, i) => 
                <Link to={`/products/${product.id}`} key={product.id} className="product-dashboard__products-carousel__product">
                    <ProductListing product={product} />
                </Link>
            )}</div>
        </div> : null}
    </React.Fragment>
}

export default RelatedProducts;