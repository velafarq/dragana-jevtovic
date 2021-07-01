import React, { Component } from 'react';
import './HomeCore.scss';
import HeroSlider from '../hero-slider/HeroSlider';
import ProductBoxes from '../product-boxes/ProductBoxes';
import ArtistBio from '../artist-bio/ArtistBio';
import Workshop from '../workshop/Workshop';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

class HomeCore extends Component {
    render() {
        return (
            <div className="home container">
                <Helmet>
                    <title>Home | Dragana Jevtovic Ceramics</title>
                    <meta name="description"
                        content="Dragana Jevtovic, artist, ceramicist, creator of the iconic Blue and White Guinea Fowl design. Her ceramics and paintings are treasured in homes across the world. Dragana has worked from her studio in Cape Town, South Africa for the last 27 years."/>
                    <link rel="canonical" href="https://draganajevtovic.com" />
                </Helmet>
                <HeroSlider />
                <h2 className="heading-text home-title">Hand-made ceramics by Dragana Jevtovic</h2>
                <ProductBoxes />
                <ArtistBio />
                <Workshop />
                <div className="contact-love">
                    <h2 className="heading-text">From South Africa with Love</h2>
                    <Link to={'/contact'} className="client-button">CONTACT</Link>
                </div>
            </div>
        )
    }
}

export default HomeCore;