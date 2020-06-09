import React, { Component } from 'react';
import './HomeCore.scss';
import HeroSlider from '../hero-slider/HeroSlider';
class HomeCore extends Component {
    render() {
        return (
            <div className="home container">
                <HeroSlider />
            </div>
        )
    }
}

export default HomeCore;