export const changeLoading = (loading) => {
    return (dispatch, getState) => {
        dispatch({ type: 'LOADING_CHANGE', loading })
    }
}