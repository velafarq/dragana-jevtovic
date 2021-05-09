import React from 'react';
import './ProductListing.scss';
import { DESIGN_NAMES, handlePrice } from '../../helpers';
import { connect } from 'react-redux';

const ProductListing = ({ product, currency }) => {
    const setImage = () => {
        let url = null;
        if (product && Array.isArray(product.images)) {
            url = product.images.find(img => img.primary);
        }
        if (!url && product.images.length) {
            url = product.images[0]
        }
        return url;
    }

    const image = setImage();


    const handleCategoryLabels = (categories) => {
        const labels = [];
        categories.forEach(cat => {
            labels.push(DESIGN_NAMES[cat]);
        });

        return labels.join(', ');
    }

    return (
        <article className="product-listing">
            <div className="product-listing__img">
                { image && image.url ?
                    <img src={image && image.url} alt={`Dragana Jevtovic Ceramics Cape Town South Africa Pottery Crockery ${product.name} ${handleCategoryLabels(product.categories)}`} /> :
                    'Product image coming soon!'
                }
            </div>
            <div className="flex-bottom">
                <div className="product-listing__design box-padding">{handleCategoryLabels(product.categories)}</div>
                <div className="product-listing__title box-padding">{product.name}</div>
                <div className="product-listing__price box-padding">{handlePrice(product.price, currency)}</div>
            </div>
        </article>
    )
}

const mapStateToProps = (state) => {
    return {
        currency: state.currency.currency
    }
}

export default connect(mapStateToProps)(ProductListing);