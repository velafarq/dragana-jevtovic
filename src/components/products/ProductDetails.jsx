import React, { useState, useEffect } from 'react'
import './ProductDetails.scss';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import ProductText from './ProductText';
import { Link } from 'react-router-dom';
import {DESIGN_NAMES} from '../../helpers';
import RelatedProducts from '../related-products/RelatedProducts';
import ProductGallery from '../product-gallery/ProductGallery';

function ProductDetails(props) {
    useFirestoreConnect([
        { collection: 'products' }
    ]);
    const products = useSelector(state => state.firestore.ordered.products);
    const product_id = props.match.params.id;
    const [secondary_images, setSecondaryImages] = useState([]);
    const [primary_image, setPrimaryImage] = useState(null);
    const [expandedImage, setExpandedImage] = useState(null);
    const [showExpanded, setShowExpanded] = useState(false);
    const [expandedIndex, setExpandedIndex] = useState(null);
    const findProduct = (items, id) => {
        if (Array.isArray(items)) { 
            return items.find(p => p.id === id);
        }
        return null;
    }

    const product = findProduct(products, product_id);

    const toggleExpanded = () => {
        if (showExpanded) {
            setExpandedImage(null);
        }
        setShowExpanded(!showExpanded);
    }

    const expandImage = (image) => {
        setExpandedImage(image);
        toggleExpanded();
    }

    useEffect(() => {
        if (product && product.images) {
            handleSecondaryImages(product.images);
            handlePrimaryImage(product.images);
        }

    }, [product]);

    function handleSecondaryImages(images) {
        const store = [];
        images.forEach((img, i) => {
            if (img.url) {
                if (!img.primary) {
                    store.push(img);
                }
                if (img.primary) {
                    store.unshift(img);
                    setExpandedIndex(i);
                }
            }
        });
        setSecondaryImages(store)
    }

    function handlePrimaryImage(images) {
        const found = images.find(img => img.primary);
        if (found !== undefined) {
            setPrimaryImage(found);
        }
    }
   
    function displayImages(imagesArr) {
        return imagesArr.map((img, i) => (
            <div key={i} className={expandedIndex === i ? 'selected mini-images__img' : 'mini-images__img'}>
                <img src={img.url} alt={img.alt} onClick={() => handleSmallImgClick(img, i)} />
            </div>
        ))
    }

    function handleSmallImgClick(img, i) {
        setPrimaryImage(img);
        setExpandedIndex(i);
    }
    
    return (
       <React.Fragment>
            <div className="product-details-container section">
                 <div className="breadcrumbs center-content">
                    <Link className="link" to={'/'}>Home</Link> / <Link className="link" to={'/products'}>Products</Link> 
                    { product && 
                        // <React.Fragment> / <Link className="link" to={'/designs/' + product.design}>{DESIGN_NAMES[product.design]}</Link> / <span className="active-link">{product.name}</span></React.Fragment> }
                        <React.Fragment> / <span className="active-link">{product.name}</span></React.Fragment> }
                </div>
                {product ? 
                    <div className="product-content"> 
                        <div className="mini-images">
                            { displayImages(secondary_images)}
                        </div>
                        <div className="main-image" onClick={() => expandImage(primary_image)}>
                            {primary_image && <img src={primary_image.url} alt={primary_image.alt} />}
                        </div>
                        <div className="product-info">
                            <ProductText product={product} />
                        </div>
                    </div> : 
                    'Product does not exist!'
                }
                <section className="related-products">
                    { product && <RelatedProducts categories={product.categories} currentProductId={product.id}></RelatedProducts> }
                </section>
            </div>

            { showExpanded && <ProductGallery toggleExpanded={toggleExpanded} image={expandedImage} />}
       </React.Fragment>
        
    )
}

export default ProductDetails
