import React, { Component } from 'react';
import './WorkshopSlider.scss';
import Carousel from 'react-elastic-carousel';
import { WORKSHOP_CAROUSEL } from '../../../constants';

class WorkshopSlider extends Component {
    constructor(props) {
        super(props) 
        this.breakPoints = [
            { width: 550, itemsToShow: 2 },
            { width: 850, itemsToShow: 4, itemsToScroll: 2 },
            { width: 1080, itemsToShow: 4, itemsToScroll: 2 },
        ];

    }

    render() {
        return (
            <div className='workshop-slider-container'>
                <Carousel className='workshop-slider'
                    breakPoints={this.breakPoints}
                    pagination={false}
                    ref={ref => (this.carousel = ref)}
                    showArrows={false}>
                    {WORKSHOP_CAROUSEL && WORKSHOP_CAROUSEL.map((url, index) => 
                    <div className='workshop-slide' 
                        // style={{backgroundImage: `url('${url}')`}} 
                        key={index}>
                            <img src={url} alt=""/>
                        {/* <i className='material-icons arrow left' onClick={() => this.carousel.slidePrev()}>keyboard_arrow_left</i>
                        <i className='material-icons arrow right' onClick={() => this.carousel.slideNext()}>keyboard_arrow_right</i> */}
                    </div>)}
                </Carousel>
            </div>
        )
    }
}

export default WorkshopSlider;