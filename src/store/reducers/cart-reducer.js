const initState = {
    items: [
        {id: '1', title: 'hello', content: 'bla'},
        {id: '2', title: 'hello hello', content: 'bla'},
        {id: '3', title: 'hello hello hello', content: 'bla'}
    ]
};

const cart_reducer = (state = initState, action) => {
    switch(action.type) {
        case 'ADD_ITEM': 
            console.log('created project', action.item);
            break;
        case 'SUBMIT_ORDER':
            console.log('submitted order', action.data);
            break;
        default: 
            return state;
    }
    return state;
}

export default cart_reducer;