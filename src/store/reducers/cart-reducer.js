const initState = {
    items: []
};

const cart_reducer = (state = initState, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                items: [...state.items, action.item]}
        case 'SUBMIT_ORDER':
            console.log(action.data);
            return state;
        case 'SUBMIT_ORDER_FAILED':
            console.log('create project err', action.err);
            return state;
        default: 
            return state;
    }
}

export default cart_reducer;