import './AdminMessage.scss';
import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

const AdminMessage = (props) => {
    useFirestoreConnect([
        { collection: 'contactForms' }
    ]);
    const [ message, setMessage ] = useState(null);
    const messages = useSelector(state => state.firestore.ordered.contactForms);

    useEffect(() => {
        if (messages && messages.length) {
            const found = messages.find(o => o.id === props.match.params.messageId);
            if (found !== undefined) {
                setMessage(found);
            }
        }
    }, [messages, props.match.params.messageId]);

    const handleDate = (date_obj) => {
        return date_obj.toDate();
    }

    return (
        <section className="message-page">
            { message && 
                <Fragment>
                    <Link to={'/admin/messages'} className="back">
                        <i className="material-icons">keyboard_arrow_left</i>
                        <span>Back to Messages</span>
                    </Link>
                    <section className="heading">
                        <div className="name">Message from <strong>{message.firstName } {message.lastName}</strong></div>
                    </section>
                    <div className="date">{handleDate(message.created_at).toString()}</div>
                    <div className="customer-message">
                        <h4>{message.subject}</h4>
                        <p>{message.message}</p>
                    </div>
                    <div className="customer-details">
                        <div className="address">
                            <h4>Contact Details</h4>
                            <address>
                                <div>{message.firstName} {message.lastName}</div>
                                <div>{message.country}</div>
                                <div>{message.phone}</div>
                                <div>{message.email}</div>
                            </address>
                        </div>
                    </div>
                </Fragment>
            }
        </section>
    )
}

export default AdminMessage;