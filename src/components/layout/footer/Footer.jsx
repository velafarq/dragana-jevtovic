import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="social-icons">
                <a className="first" href="https://www.instagram.com/draganajevtovic/" rel="noopener noreferrer" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://www.facebook.com/Dragana-Jevtovic-Ceramics-186796763890" rel="noopener noreferrer" target="_blank"><i class="fab fa-facebook"></i></a>
            </div>
            <div class="heading-text">Copyright 2020 Dragana Jevtovic. All Rights Reserved</div>
        </div>
    )
}

export default Footer;