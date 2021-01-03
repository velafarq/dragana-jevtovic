import React, { Component } from 'react';
import './HeroSlider.scss';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';

class HeroSlider extends Component {
    state =  {
        items: [
        {
            title: 'TEST Blue Guinea Fowl',
            design: 'blue_guinea',
            url: 'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2F20200918_150107.jpg?alt=media&token=09aa580c-e975-43e1-8b6f-10b2b0b48218'
        },
        {
            title: 'Blue Guinea Fowl',
            design: 'blue_guinea',
            url: 'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2Fblue-guinea-slide.png?alt=media&token=c4d35c3a-ef30-4051-aa05-35b4e08f2a19'
        },
        {
            title: "Royal African",
            design: 'royal_african',
            url: 'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2Froyal-african-main.png?alt=media&token=b6c6a8f9-d85f-43f8-838d-e4e3657fff78',
        },
        {
            title: "African Elephant",
            design: 'african_elephant',
            url: 'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2Fafrican-elephant-main.png?alt=media&token=05f67e2d-c364-4ee7-9341-e7a4f148ec60',
        },
        {
            title: 'Brown Feather',
            design: 'brown_feather',
            url: 'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2Fbrown-feather-slide.JPG?alt=media&token=bda511ac-38a0-46e1-9533-d859edce351d'},
        {
            title: "Two Oceans' Feathers",
            design: 'oceans_feather',
            url: 'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2Foceans-feathers-slider.JPG?alt=media&token=110083ff-3d26-49bc-86c8-25527f081e32'
        }]
    }

    render() {
        const { items } = this.state;
        return (
            <div className='hero-container'>
                <Carousel className='slider' 
                    itemsToShow={1}
                    pagination={false}
                    ref={ref => (this.carousel = ref)}
                    showArrows={false}
                    enableAutoPlay={false}
                    autoPlaySpeed={5000}
                    transitionMs={1500}>
                    {items.map((item, i) => 
                    <div className='slide' 
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