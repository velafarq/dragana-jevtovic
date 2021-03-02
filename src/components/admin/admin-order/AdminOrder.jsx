import React, { useEffect, useState, Fragment } from 'react';
import './AdminOrder.scss';
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';


const AdminOrder = (props) => {
    useFirestoreConnect([
        { collection: 'orders' }
    ]);
    const [ order, setOrder ] = useState(null);
    const orders = useSelector(state => state.firestore.ordered.orders);

    useEffect(() => {
        if (orders && orders.length) {
            const found = orders.find(o => o.id === props.match.params.orderId);
            if (found !== undefined) {
                console.log(found)
                setOrder(found);
            }
        }
    }, [orders, props.match.params.orderId]);

    return (
        <section className="order-page">
            {order && 
                <Fragment>
                    <section className="heading">
                        <div className="name">Order Summary</div>
                    </section>
                    <div className="customer-details">
                        <div className="address">
                            <h4>Contact Details</h4>
                            <address>
                                <div>{order.firstName} {order.lastName}</div>
                                <div>{order.state}, {order.country}</div>
                                <div>{order.postalCode}</div>
                                <div>{order.phone}</div>
                                <div>{order.email}</div>
                            </address>

                        </div>


                    </div>

                </Fragment>
                
            }
            
        </section>
    )
}

export default AdminOrder;