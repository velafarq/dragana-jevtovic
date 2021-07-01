import React, { useState, useEffect } from 'react'
import './ProductDetails.scss';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import ProductText from './ProductText';
import { Link } from 'react-router-dom';
import RelatedProducts from '../related-products/RelatedProducts';
import ProductGallery from '../product-gallery/ProductGallery';
import { DESIGN_NAMES, handleCategoryLabels, hyphenateText } from '../../helpers';
import { Helmet } from 'react-helmet';

function ProductDetails(props) {
    useFirestoreConnect([
        { collection: 'products', where: ['hidden', '==', false] }
    ]);
    const products = useSelector(state => state.firestore.ordered.products);
    const product_id = props.match.params.id;
    const [expandedImage, setExpandedImage] = useState(null);
    const [showExpanded, setShowExpanded] = useState(false);
    const [img_index, setImgIndex] = useState(null);
    const [product_images, setProductImages] = useState([]);
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
            setProductImages(product.images);
            handlePrimaryImage(product.images);
        }

    }, [product]);


    function handlePrimaryImage(images) {
        const idx = images.findIndex(img => img.primary);
        if (idx !== -1) {
            setImgIndex(idx);
        } else {
            setImgIndex(0);
        }
    }
   
    function displayImages(imagesArr) {
        return imagesArr.map((img, i) => (
            <div key={i} className={img_index === i ? 'selected mini-images__img' : 'mini-images__img'}>
                <img src={img.url} alt={altText()} onClick={() => setImgIndex(i)} />
            </div>
        ))
    }

    const altText = () => {
        return `Dragana Jevtovic Ceramics Cape Town South Africa Pottery Crockery ${product.name} ${handleCategoryLabels(product.categories)}`
    }

    function next(e) {
        e.stopPropagation()
        if (img_index === product_images.length - 1) {
            setImgIndex(0);
        } else {
            setImgIndex(img_index + 1);
        }
    }

    function previous(e) {
        e.stopPropagation();
        if (img_index === 0) {
            setImgIndex(product_images.length - 1);
        } else {
            setImgIndex(img_index - 1);
        }
    }
    
    return (
       <React.Fragment>
            <div className="product-details-container section header-padding">
                { product && 
                    <Helmet>
                        <title>{DESIGN_NAMES[product.categories[0]] + ' ' + product.name} | Dragana Jevtovic Ceramics</title>
                        <meta name="description" content={`Iconic ${DESIGN_NAMES[product.categories[0]] + ' ' + product.name} hand made and designed by Dragana Jevtovic in Cape Town, South Africa.`} />
                        <link rel="canonical" href={`https://draganajevtovic.com/products/${hyphenateText(product.name)}/${product.id}`} />
                    </Helmet>
                }
                 <div className="breadcrumbs center-content">
                    <Link className="link" to={'/'}>Home</Link> / <Link className="link" to={'/products'}>Products</Link> 
                    { product && 
                        <React.Fragment> / <Link className="link" to={'/designs/' + product.categories[0]}>{DESIGN_NAMES[product.categories[0]]} </Link>
                        / <span className="active-link">{product.name}</span></React.Fragment> }
                </div>
                {product ? <React.Fragment>
                    <div className="product-content"> 
                        <div className="main-image fade-in" onClick={() => expandImage(product_images[img_index])}>
                            {product_images.length > 1 && 
                                <button className="prev-btn" onClick={(e) => previous(e)}>
                                    <i className="material-icons">keyboard_arrow_left</i>
                                </button>} 
                            {product_images[img_index] && <img src={product_images[img_index].url} alt={altText()} />}
                            {product_images.length > 1 && 
                                <button className="next-btn" onClick={(e) => next(e)}>
                                    <i className="material-icons">keyboard_arrow_right</i>
                                </button>}
                        </div>
                        <div className="product-info">
                            <ProductText product={product} />
                        </div>
                    </div> 
                    <div className="mini-images">
                        { displayImages(product_images)}
                    </div>
                </React.Fragment>
                   : 
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
