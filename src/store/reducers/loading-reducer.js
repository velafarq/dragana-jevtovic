const initState = {
    loading: false
};

const loading_reducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOADING_CHANGE':
            return {
                loading: action.loading
            }
        default: 
            return state;
    }
}

export default loading_reducer;