import React, { useState } from 'react';
import './ProductGallery.scss';

const ProductGallery = ({ image, toggleExpanded }) => {
    const [zoom, setZoom] = useState(0);
    const zoomIn = () => {
        if (zoom < 10) {
            setZoom(zoom + 1);
        }
    }

    const zoomOut = () => {
        if (zoom > 0) {
            setZoom(zoom - 1);
        }
    }
    return (
        <div className="product-gallery">
            <div className="zoom-btns">
                <button onClick={() => zoomOut()}>
                    <i className="material-icons">remove_circle_outline</i>
                </button>
                <button onClick={() => zoomIn()}>
                    <i className="material-icons">add_circle_outline</i>
                </button>
            </div>
            <button className="close-btn" onClick={() => toggleExpanded()}>
                <i className="material-icons">close</i>
            </button>
            <img id="main-gallery-image" className={'zoom-' + zoom} src={image.url} alt=""/>
        </div>
    )
}

export default ProductGallery;