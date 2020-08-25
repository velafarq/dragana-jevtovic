import React, { useState } from 'react';
import './contact.scss';
import { submitContactForm } from '../../store/actions/cart-actions';
import { connect } from 'react-redux';

const Contact = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            firstName, lastName, email, phone, subject, message
        }
        props.submit(payload);
        clearForm();
    }

    const clearForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setSubject('');
        setMessage('');
    }

    return (
        <div className="contact">
            <h1 className="contact__title heading-text">Contact</h1>
            <p>Have a question? We’d love to hear from you. Please send a message and we’ll respond as soon as possible.</p>
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