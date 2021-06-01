import React, { useState } from 'react';
import './contact.scss';
import { submitContactForm } from '../../store/actions/cart-actions';
import { connect } from 'react-redux';
import Pdf from '../../assets/dragana-jevtovic-ceramics-directions-to-studio.pdf';

const Contact = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            firstName, lastName, email, phone, country, postalCode, subject, message
        }
        props.submit(payload);
        setShowSuccess(true);

        setTimeout(() => {
            setShowSuccess(false);
        }, 8000)
        clearForm();
    }

    const clearForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setCountry('');
        setSubject('');
        setMessage('');
        setPostalCode('');
    }

    return (
        <div className="contact header-padding">
            <h1 className="contact__title heading-text">Contact</h1>
            <h4>Have a question? We’d love to hear from you. Please send a message and we’ll respond as soon as possible.</h4>
           
            <form onSubmit={handleSubmit} className="contact__form">
                <div className="row">
                    <label>First Name*
                        <input 
                            type="text" 
                            name="firstName"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                            required />
                    </label>
                    <label>Last Name*
                        <input 
                            type="text" 
                            name="lastName"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                            required />
                    </label>
                </div>
                <div className="row">
                    <label>Email*
                        <input 
                            type="email" 
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required />
                    </label>
                    <label>Phone
                        <input 
                            type="text" 
                            name="phone"
                            value={phone}
                            onChange={e => setPhone(e.target.value)} />
                    </label>
                </div>
                <div className="row">
                    <label>Country*
                        <input 
                            type="text" 
                            name="country"
                            value={country}
                            onChange={e => setCountry(e.target.value)}
                            required />
                    </label>

                    <label>Postal Code
                        <input 
                            type="text" 
                            name="postalCode"
                            value={postalCode}
                            onChange={e => setPostalCode(e.target.value)} />
                    </label>
                </div>
               
                <label>Subject*
                    <input 
                        type="text" 
                        name="subject"
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                        required />
                </label>
                <label>Message*
                    <textarea 
                        type="text" 
                        name="message"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        required />
                </label>
                <button className='heading-text contact__form__submit'>Send</button>
                {showSuccess && <div className="success">Sent. Thank you!</div>}
            </form>
            <section>
                <div className="contact-top">
                    <div className="address">
                        <h4>Physical Address</h4>
                        <address>
                            <div>4 Lobelia Street</div>
                            <div>Wellway Park</div>
                            <div>Durbanville 7550</div>
                            <div>South Africa</div>
                            <div>Telephone: +27 (0)21 975 2530</div>
                            <div>Cell: +27 (0)83 283 5201</div>
                            <div>E-mail: <a href="mailto:dragana@draganajevtovic.com">dragana@draganajevtovic.com</a></div>
                            <div>Commercial Enquiries:
                            Please email directly to <a href="mailto:dragana@draganajevtovic.com">dragana@draganajevtovic.com</a></div>
                        </address>
                        <a className="download-directions" href={Pdf} target="_blank">
                            <button className="download-button">Download Directions</button>
                          </a>
                    </div>
                    <div>
                        <a href="https://wa.me/27832835201" target="_blank" className="whatsapp-link">
                            <img className="whatsapp-message" src="https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/icons%2Fmessage-us-correct.png?alt=media&token=c88f2cda-ef9f-4ed5-888b-84382b60ed77" alt=""/>
                        </a>
                    </div>
                </div>
            </section>
            
            
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        submit: data => dispatch(submitContactForm(data))
    }
}
export default connect(null, mapDispatchToProps)(Contact);