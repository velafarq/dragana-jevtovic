import React from 'react';
import './About.scss';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="about">
            <h1 className="about__title heading-text">How to Purchase</h1>
            <p>To receive a quote on the items you would like designed, simply add them to your “Quote Cart”, fill in your details and then checkout.</p>
            <p>We are a small studio and deal personally with each order. Within 24 hours we will get back to you with a quote in either ZAR, US$, GB£ or € (depending in which part of the world you reside).</p>
            <p>We will also supply a quote for shipping and handling and give you a choice of either airmail or surface mail delivery.</p>
            <p>If you wish to continue with the order, email your acceptance, giving your preferred shipping method (surface or air) and we will provide you with bank or PayPal details for payment. You may also modify your order at this stage.</p>
            <p>We do not have a warehouse full of stock. It’s probable that your items will be made especially for you.</p>
            <p>We are happy to correspond via email with our customers, and if necessary, discuss your order on the phone.</p>
            <Link className="about__button heading-text" to={'/products'}>View Products</Link>
        </div>
    )
}

export default About;