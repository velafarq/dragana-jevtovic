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

export const updateBox = payload => {
    return (dispatch, getState, { getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('configurations').doc('boxes').set(payload)
            .then(() => {
                console.log('success');
                
                dispatch({ type: 'UPDATE_BOXES_SUCCESS'})
            }).catch((error) => {
                dispatch({ type: 'UPDATE_BOXES_FAILED', error});
            });
    }
}

export const updateDesignHeader = payload => {
    return (dispatch, getState, { getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('configurations').doc('design_header').set(payload)
            .then(() => {
                console.log('success');
                
                dispatch({ type: 'UPDATE_DESIGN_HEADER_SUCCESS'})
            }).catch((error) => {
                dispatch({ type: 'UPDATE_DESIGN_HEADER_FAILED', error});
            });
    }
}

export const updateHeroSlider = payload => {
    return (dispatch, getState, { getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('configurations').doc('home_config').set(payload)
            .then(() => {
                console.log('success');
                dispatch({ type: 'UPDATE_HERO_SLIDER_SUCCESS'})
            }).catch((error) => {
                dispatch({ type: 'UPDATE_HERO_SLIDER_FAILED', error});
            });
    }
}

export const markMessageAsRead = payload => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('contactForms').doc(payload.id).set(payload)
            .then(() => {
                dispatch({ type: 'MESSAGE_READ_SUCCESS'})
            }).catch((error) => {
                dispatch({ type: 'MESSAGE_READ_FAILED', error});
            });

    }
}