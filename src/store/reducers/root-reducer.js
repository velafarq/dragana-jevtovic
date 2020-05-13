import auth_reducer from './auth-reducer';
import cart_reducer from './cart-reducer';
import { combineReducers } from 'redux';

const root_reducer = combineReducers({
    auth: auth_reducer,
    cart: cart_reducer
});

export default root_reducer;