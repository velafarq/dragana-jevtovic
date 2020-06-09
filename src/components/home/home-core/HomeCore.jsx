import React, { Component } from 'react';
import './HomeCore.scss';
import HeroSlider from '../hero-slider/HeroSlider';
class HomeCore extends Component {
    render() {
        return (
            <div className="home container">
                <HeroSlider />

                <h2 className="heading-text">Hand-made ceramics by Dragana Jevtovic</h2>
            </div>
        )
    }
}

export default HomeCore;