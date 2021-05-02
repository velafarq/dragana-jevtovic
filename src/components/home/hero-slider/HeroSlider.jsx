import React, { Component } from 'react';
import './HeroSlider.scss';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';
import {AFRICAN_ELEPHANT_SLIDES, BLUE_GUINEA_SLIDES, AFRICAN_VELVET_SLIDES, OCEANS_FEATHER_SLIDES, ROYAL_AFRICAN_SLIDES, NEW_CREATIONS_SLIDES} from '../../../helpers';

class HeroSlider extends Component {
    buildItems() {
        const items = [];
        const longest = Math.max(BLUE_GUINEA_SLIDES.length, AFRICAN_VELVET_SLIDES.length, ROYAL_AFRICAN_SLIDES.length, AFRICAN_ELEPHANT_SLIDES.length, OCEANS_FEATHER_SLIDES.length, NEW_CREATIONS_SLIDES.length);
        for (let i = 0; i < longest; i++) {
            if (NEW_CREATIONS_SLIDES[i]) {
                items.push(
                    {
                        title: 'New Creations',
                        design: 'new_creations',
                        url: NEW_CREATIONS_SLIDES[i]
                    }
                )
            }
            if (BLUE_GUINEA_SLIDES[i]) {
                items.push(
                    {
                        title: 'Blue Guinea Fowl',
                        design: 'blue_guinea',
                        url: BLUE_GUINEA_SLIDES[i]
                    }
                )
            }
            if (ROYAL_AFRICAN_SLIDES[i]) {
                items.push(
                    {
                        title: "Royal African",
                        design: 'royal_african',
                        url: ROYAL_AFRICAN_SLIDES[i]
                    }
                )
            }
            if (AFRICAN_ELEPHANT_SLIDES[i]) {
                items.push(
                    {
                        title: "African Elephant",
                        design: 'african_elephant',
                        url: AFRICAN_ELEPHANT_SLIDES[i]
                    },
                )
            }
            if (AFRICAN_VELVET_SLIDES[i]) {
                items.push(
                    {
                        title: 'African Velvet',
                        design: 'african_velvet',
                        url: AFRICAN_VELVET_SLIDES[i]
                    }
                )
            }
            if (OCEANS_FEATHER_SLIDES[i]) {
                items.push(
                    {
                        title: "Two Oceans' Feathers",
                        design: 'oceans_feather',
                        url: OCEANS_FEATHER_SLIDES[i]
                    },
                )
            }
        }
        return items;
    }

    goToBeginning(pageIndex, items_length) {
        if (pageIndex + 1 === items_length) {
            this.carousel.goTo(0);
        }
    }

    render() {
        const items = this.buildItems();
        return (
            <div className='hero-container'>
                <Carousel className='slider' 
                    itemsToShow={1}
                    pagination={false}
                    ref={ref => (this.carousel = ref)}
                    showArrows={false}
                    enableAutoPlay={true}
                    autoPlaySpeed={5000}
                    transitionMs={1000}
                    onChange={(currentItem, pageIndex) => this.goToBeginning(pageIndex, items.length)}>
                    {items.map((item, i) => 
                    <div className='slide fade-in' 
                        style={{backgroundImage: `url('${item.url}')`}} 
                        key={i}>
                        <div className="gradient"></div>
                        <i className='material-icons arrow left' onClick={() => this.carousel.slidePrev()}>keyboard_arrow_left</i>
                        <i className='material-icons arrow right' onClick={() => this.carousel.slideNext()}>keyboard_arrow_right</i>
                        <div className="content">
                            <h2 className="heading-text">{item.title}</h2>
                            <Link to={`/designs/${item.design}`}>
                                <button className="client-button content__btn">View Style</button>
                            </Link>
                        </div>
                    </div>)}
                </Carousel>
            </div>
        )
    }
}

export default HeroSlider;