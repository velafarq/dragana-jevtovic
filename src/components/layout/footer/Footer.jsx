import React, {Fragment} from 'react';
import { useLocation } from 'react-router-dom';

import './Footer.scss';

const Footer = () => {
    const isAdmin = useLocation().pathname.includes('admin');
    console.log(isAdmin)
    return (
        !isAdmin && 
        <Fragment>
            <div className="footer-container">
                <div className="social-icons">
                    <a className="first" href="https://www.instagram.com/draganajevtovic/" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.facebook.com/Dragana-Jevtovic-Ceramics-186796763890" rel="noopener noreferrer" target="_blank"><i className="fab fa-facebook"></i></a>
                </div>
                <div className="heading-text">Copyright 2020 Dragana Jevtovic. All Rights Reserved</div>
            </div>
        </Fragment>
    )
}

export default Footer;