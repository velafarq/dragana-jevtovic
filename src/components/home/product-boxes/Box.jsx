import React from 'react';
import './Box.scss';

const Box = (props) => {
    const { 
        url,
        title,
        layout
    } = props;

    return (
        <div className={'product-box ' + layout}>
            <div className="side fade-in" 
                style={{backgroundImage: `url('${url}')`}} ></div>
            <div className="side">
                <h2 className="heading-text">{title}</h2>
                <button className="client-button side__btn">VIEW STYLE</button>
            </div>
        </div>
    )
}

export default Box;