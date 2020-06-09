import React, { Component } from 'react';
import './HeroSlider.scss';
import Carousel from 'react-elastic-carousel';

class HeroSlider extends Component {
    state =  {
        items: [
        {
            id: 0,
            title: 'Blue Guinea Fowl',
            url: 'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2Fblue-guinea-slide.png?alt=media&token=c4d35c3a-ef30-4051-aa05-35b4e08f2a19'
        },
        {
            id: 1,
            title: 'Brown Feather',
            url: 'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2Fbrown-feather-slide.JPG?alt=media&token=bda511ac-38a0-46e1-9533-d859edce351d'},
        {
            id: 2,
            title: 'Two Oceans Feathers',
            url: 'https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/home%2Fmain-slider%2Foceans-feathers-slider.JPG?alt=media&token=110083ff-3d26-49bc-86c8-25527f081e32'
        }]
    }

    render() {
        const { items } = this.state;
        return (
            <div className='container'>
                <Carousel className='slider' 
                    itemsToShow={1}
                    pagination={false}
                    ref={ref => (this.carousel = ref)}
                    showArrows={false}
                    enableAutoPlay={false}
                    autoPlaySpeed={5000}
                    transitionMs={1500}>
                    {items.map(item => 
                    <div className='slide' 
                        style={{backgroundImage: `url('${item.url}')`}} 
                        key={item.id}>
                        <i className='material-icons arrow left' onClick={() => this.carousel.slidePrev()}>keyboard_arrow_left</i>
                        <i className='material-icons arrow right' onClick={() => this.carousel.slideNext()}>keyboard_arrow_right</i>
                        <div className="content">
                            <h2 className="heading-text">{item.title}</h2>
                            <button className="client-button content__btn">View Style</button>
                        </div>
                   
                    </div>)}
                </Carousel>
            </div>
        )
    }
}

export default HeroSlider;