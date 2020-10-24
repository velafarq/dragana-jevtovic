import React, { useState } from 'react';
import './SubmitOrder.scss';
import { connect } from 'react-redux';
import { submitOrder } from '../../store/actions/cart-actions';

const SubmitOrder = ({ submitOrder }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            firstName, lastName, email, phone, country, message
        }
        submitOrder(payload, 'submitted' );
        setSubmitted(true);
        clearForm();
    }

    const clearForm = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setCountry('');
        setMessage('');
    }

    const form = () => {
        return <div className="contact">
            <h1 className="contact__title heading-text">About you...</h1>
            <p>Before you checkout, tell us a bit about yourself so that we know how to contact you.</p>
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
                <label>Anything else you'd like to add?
                    <textarea 
                        type="text" 
                        name="message"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        required />
                </label>
                <button className='heading-text contact__form__submit'>Submit Order Request</button>
            </form>
        </div>
    }

    return (
        <React.Fragment>{!submitted ? form() : 
        <div className="submitted-message">
            Thank you! We'll be in touch soon.
        </div>
        }
 
        </React.Fragment>
       
    )
}


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitOrder: (data) => dispatch(submitOrder(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SubmitOrder);