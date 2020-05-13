export const addItem = (item) => {
    return (dispatch, getState) => {
        // make async call to db
        
        dispatch({ type: 'ADD_ITEM', item })
    }
}