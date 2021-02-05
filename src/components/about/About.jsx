import React from 'react';
import './About.scss';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="about">
            <h1 className="about__title heading-text">How to Purchase</h1>
            <p>To receive a quote add the items you would like to purchase to your “Quote Cart”, fill in your details and then check out.</p>
            <p>
                Within 24 hours we will get back to you by email with a quote, including shipping, in
                either ZAR, US$, GB£ or € (depending on which part of the world you reside in).
                If you wish to continue with the order, reply to our email with your acceptance
                including the delivery address and a contact telephone number and we will send you
                a PayPal invoice for payment. You may also modify your order at this stage.
                It is probable that your items will be made especially for you as we do not have a
                warehouse full of stock.
            </p>
            <p>
                We are a small studio and deal personally with each order. We are happy to
                correspond via email with our customers, and if necessary, discuss your order on
                <a href="https://wa.me/27832835201" target="_blank"> WhatsApp + 27 83 283 5201</a>.
            </p>
            <p>
                Delivery is by FedEx courier - We have a special contract for
                international shipping with favourable rates. Orders should
                arrive within 7 - 8 days after sending.
            </p>

            <p>
                Shop in real time via WhatsApp and get a 10% discount.
                Arrange an appointment with Dragana on WhatsApp for a
                video tour of the studio shop - discuss shapes, sizes and
                designs and ask about special offers. +27 83 283 5201.
            </p>
            <div>
                <a href="https://wa.me/27832835201" target="_blank" className="whatsapp-link">
                    <img className="whatsapp-message" src="https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/icons%2Fmessage-us-correct.png?alt=media&token=c88f2cda-ef9f-4ed5-888b-84382b60ed77" alt=""/>
                </a>
            </div>
            <Link className="about__button heading-text" to={'/products'}>View Products</Link>
        </div>
    )
}

export default About;