export const addItem = (item) => {
    return (dispatch, getState) => {
        // make async call to db
        
        dispatch({ type: 'ADD_ITEM', item })
    }
}

export const submitOrder = (data) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('orders').add({ 
            items: data, 
            user_email: 'vela.mrdjen@gmail.com', 
            user_id: '12345',
            created_at: new Date()
        }).then(() => {
            dispatch({ type: 'SUBMIT_ORDER', data});
        }).catch((error) => {
            dispatch({ type: 'SUBMIT_ORDER_FAILED', error});
        })
    }
}

export const submitContactForm = (data) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('contactForms').add({ 
            ...data,
            created_at: new Date()
        }).catch((error) => {
            console.error(error);
        })
    }
}