import React, { useState } from 'react';
import './contact.scss';
import { submitContactForm } from '../../store/actions/cart-actions';
import { connect } from 'react-redux';

const Contact = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            firstName, lastName, email, phone, country, subject, message
        }
        props.submit(payload);
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
    }

    return (
        <div className="contact">
            <h1 className="contact__title heading-text">Contact</h1>
            <p>Have a question? We’d love to hear from you. Please send a message and we’ll respond as soon as possible.</p>
            <a href="https://wa.me/27832835201" target="_blank" className="whatsapp-link">
                <img className="whatsapp-message" src="https://firebasestorage.googleapis.com/v0/b/dragana-jevtovic.appspot.com/o/icons%2Fmessage-us-correct.png?alt=media&token=c88f2cda-ef9f-4ed5-888b-84382b60ed77" alt=""/>
            </a>
            <div>Or Leave us a message here:</div>
            <form onSubmit={handleSubmit} className="contact__form">
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
                <label>Country*
                    <input 
                        type="text" 
                        name="country"
                        value={country}
                        onChange={e => setCountry(e.target.value)}
                        required />
                </label>
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
                <button className='heading-text contact__form__submit'>Send Message</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        submit: data => dispatch(submitContactForm(data))
    }
}
export default connect(null, mapDispatchToProps)(Contact);