export const createProduct = payload => {
    return (dispatch, getState, { getFirestore}) => {
        const firestore = getFirestore;

        firestore.collection('products').add(payload)
            .then(() => {
                console.log('success');
                
                dispatch({ type: 'CREATE_PRODUCT_SUCCESS'})
            }).catch((error) => {
                dispatch({ type: 'CREATE_PRODUCT_FAILED', error});
            });
    }
}