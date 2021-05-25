import React from 'react';
import './Workshop.scss';
import WorkshopSlider from './WorkshopSlider';

const Workshop = () => {

    const a = "Thirteen women from previously disadvantaged backgrounds work with Dragana Jevtovic in her Studio in Cape Town. Most have not had the opportunity of completing their schooling and are the bread winners of their extended families. For many this was their first chance of employment.";
    const b = "Empowered through the skills that they have learnt in the Studio, they have taken charge of and bettered their and their children’s lives. Each uniquely hand-decorated item from the studio represents the joys and struggles of these wonderful women and touches the lives of at least seventy people in South Africa.";

    const paragraphs = [a, b];
    return (
        <div className="workshop-container">
            <h2 className="heading-text">Dragana Jevtovic Ceramics Studio Staff</h2>
            {paragraphs.map((p, i) => <p key={i} className="workshop-description">{p}</p>)}
            {/* <WorkshopSlider /> */}

        </div>
    )
}

export default Workshop;