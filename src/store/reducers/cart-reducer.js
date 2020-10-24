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
            return {
                ...initState
            };
        case 'SUBMIT_ORDER_FAILED':
            return state;
        case 'UPDATE_ITEM_QUANTITY': {
            const {item_index, quantity} = action.data;
            const copied_items = [...state.items];
            const item = copied_items[item_index];
            if (item) {
                copied_items[item_index].quantity = quantity;
            }
            return {
                ...state,
                items: copied_items
            }
        }
        case 'REMOVE_ITEM': {
            const { index } = action.data;
            const copied_items = [...state.items];
            copied_items.splice(index, 1);
            return {
                ...state,
                items: copied_items
            }
        }
        default: 
            return state;
    }
}

export default cart_reducer;