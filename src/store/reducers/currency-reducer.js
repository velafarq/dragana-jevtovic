const initState = {
    currency: 'usd'
};

const currency_reducer = (state = initState, action) => {
    switch(action.type) {
        case 'CURRENCY_CHANGE':
            return {
                currency: action.currency
            }
        default: 
            return state;
    }
}

export default currency_reducer;