import React, { Component } from 'react';
import './HeroSlider.scss';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import Spinner from '../../spinner/Spinner';
import {DESIGN_NAMES} from '../../../helpers';
class HeroSlider extends Component {
    constructor() {
        super();
        this.state = {
            loading: true,
            items: []
        }
    }

    componentDidMount() {
        const db = firebase.firestore();
        const doc_ref = db.collection("configurations").doc("home_config");
        doc_ref.get().then(doc => {
            if (doc.exists) {
                const config = doc.data();
                const items = this.buildSlider(config.header_slides);
                this.setState({ items, loading: false });
            }
        });
    }

    getLength(arr) {
        if (Array.isArray(arr)) {
            return arr.length;
        }
        return 0;
    }

    getLongestArrLength(obj) {
        let max = 0;
        Object.values(obj).forEach(val => {
            console.log(val)
            if (val && val.length && val.length > max) {
                max = val.length;
            }
        });
        return max;
    }

    buildSlider(slides) {
        const items = [];
        const longest = this.getLongestArrLength(slides);
        for (let i = 0; i < longest; i++) {
            Object.keys(slides).forEach(key => {
                if (slides[key][i]) {
                    items.push({
                        title: DESIGN_NAMES[key],
                        design: key,
                        url: slides[key][i]
                    });
                }
            });
        }
        return items;
    }

    goToBeginning(pageIndex, items_length) {
        if (pageIndex + 1 === items_length) {
            this.carousel.goTo(0);
        }
    }

    render() {
        const { items, loading } = this.state;
        return (
            !loading ? 
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
            </div> :
            <div className="spinner"><Spinner /></div>
        )
    }
}

export default HeroSlider;