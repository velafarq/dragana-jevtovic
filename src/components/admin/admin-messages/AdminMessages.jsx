import React, { Fragment, useEffect, useState }  from 'react';
import './AdminMessages.scss';
import AdminNav from '../admin-nav/AdminNav';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';

const AdminMessages = () => {
    useFirestoreConnect([
        { collection: 'contactForms' }
    ]);
    const allMessages = useSelector(state => state.firestore.ordered.contactForms);
    const [displayMessages, setDisplayMessages] = useState([]);

    useEffect(() => {
        console.log(allMessages)
        setDisplayMessages(allMessages);
    }, [allMessages]);

    const handleDate = (date_obj) => {
        return date_obj.toDate();
    }

    const row = (msg) => (
        <Fragment key={msg.id}>
            <Link to={`/admin/messages/${msg.id}`} className='box 1'>{handleDate(msg.created_at).toDateString()}</Link>
            <Link to={`/admin/orders/${msg.id}`} className='box 2'>{msg.firstName} {msg.lastName}</Link>
            <Link to={`/admin/orders/${msg.id}`} className='box 3'>{msg.subject}</Link>
            <Link to={`/admin/orders/${msg.id}`} className='box 3'>{msg.email}</Link>
            <Link to={`/admin/orders/${msg.id}`} className='box 4'>{msg.phone}</Link>
            <Link to={`/admin/orders/${msg.id}`} className='box 5 table-actions'></Link>
        </Fragment>
    );

    const generateTable = (msgs) => {
        const newMsgs = [...msgs];
        const sorted = newMsgs.sort((a, b) => {
           return new Date(b.created_at.toDate().toISOString()) - new Date(a.created_at.toDate().toISOString());
        });
        return sorted.map((msg) => row(msg));
    }
    return <Fragment>
        { displayMessages && 
            <section className="admin-messages">
                <AdminNav />
                <div className='table'>
                    <div className="box title">Created At</div>
                    <div className="box title">Name</div>
                    <div className="box title">Subject</div>
                    <div className="box title">Email</div>
                    <div className="box title">Phone</div>
                    <div className="box title"></div>
                    {generateTable(displayMessages)}
                </div>
            </section>
        }
    </Fragment>
}

export default AdminMessages;