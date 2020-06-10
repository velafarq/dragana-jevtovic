import React from 'react';
import './Workshop.scss';
import WorkshopSlider from './WorkshopSlider';

const Workshop = () => {

    const workshop_description = 'Twelve women, mostly single mothers without specific education or work experience, work in the studio of designer Dragana Jevtovic in Cape Town. They are trained and guided by Dragana, who knows from experience how important independence is for a single mother. Good working conditions are therefore central to the studio. Their jobs enable women to support their families and provide their children with a good future. Every item you buy directly has a positive impact on the lives of 75 South Africans.';

    return (
        <div className="workshop-container">
            <h2 className="heading-text">The Workshop</h2>
            <p className="workshop-description">
                {workshop_description}
            </p>
            <WorkshopSlider />

        </div>
    )
}

export default Workshop;