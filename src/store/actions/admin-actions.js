export const createProduct = payload => {
    return (dispatch, getState, { getFirestore}) => {
        const firestore = getFirestore();

        firestore.collection('products').add(payload)
            .then(() => {
                console.log('success');
                
                dispatch({ type: 'CREATE_PRODUCT_SUCCESS'})
            }).catch((error) => {
                dispatch({ type: 'CREATE_PRODUCT_FAILED', error});
            });
    }
}

export const updateProduct = payload => {
    return (dispatch, getState, { getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('products').doc(payload.id).set(payload)
            .then(() => {
                console.log('success');
                
                dispatch({ type: 'UPDATE_PRODUCT_SUCCESS'})
            }).catch((error) => {
                dispatch({ type: 'UPDATE_PRODUCT_FAILED', error});
            });
    }
}

export const deleteProduct = id => {
    return (dispatch, getState, { getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('products').doc(id).delete()
            .then(() => {
                console.log('success');
                
                dispatch({ type: 'DELETE_PRODUCT_SUCCESS'})
            }).catch((error) => {
                dispatch({ type: 'DELETE_PRODUCT_FAILED', error});
            });
    }
}