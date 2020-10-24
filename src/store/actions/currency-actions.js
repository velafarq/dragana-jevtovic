export const changeCurrency = (currency) => {
    return (dispatch, getState) => {
        dispatch({ type: 'CURRENCY_CHANGE', currency })
    }
}