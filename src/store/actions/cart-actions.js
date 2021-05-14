export const addItem = (item) => {
    return (dispatch, getState) => {
        dispatch({ type: 'ADD_ITEM', item })
    }
}

export const submitOrder = (data) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const state = getState();
        const payload = {
            ...data, 
            items: state.cart.items,
            created_at: new Date().toISOString()
        }
        const firestore = getFirestore();
        firestore.collection('orders').add(payload).then(() => {
            dispatch({ type: 'SUBMIT_ORDER', payload});
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
            read: false,
            created_at: new Date()
        }).catch((error) => {
            console.error(error);
        })
    }
}

export const updateItemQuantity = (data) => {
    return (dispatch) => {
        dispatch({ type: 'UPDATE_ITEM_QUANTITY', data });
    }
}

export const removeItem = (data) => {
    return (dispatch) => {
        dispatch({ type: 'REMOVE_ITEM', data });
    }
}
