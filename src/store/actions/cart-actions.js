export const addItem = (item) => {
    return (dispatch, getState) => {
        // make async call to db
        
        dispatch({ type: 'ADD_ITEM', item })
    }
}

export const submitOrder = (data) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        dispatch({ type: 'SUBMIT_ORDER', data});
    }
}