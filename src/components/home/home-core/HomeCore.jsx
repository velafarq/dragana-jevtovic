import React, { Component } from 'react';
import './HomeCore.scss';
import HeroSlider from '../hero-slider/HeroSlider';
import ProductBoxes from '../product-boxes/ProductBoxes';
import ArtistBio from '../artist-bio/ArtistBio';
import Workshop from '../workshop/Workshop';

class HomeCore extends Component {
    render() {
        return (
            <div className="home container">
                <HeroSlider />
                <h2 className="heading-text home-title">Hand-made ceramics by Dragana Jevtovic</h2>
                <ProductBoxes />
                <ArtistBio />
                <Workshop />
            </div>
        )
    }
}

export default HomeCore;