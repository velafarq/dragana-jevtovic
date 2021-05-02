import auth_reducer from './auth-reducer';
import cart_reducer from './cart-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import currency_reducer from './currency-reducer';
import loading_reducer from './loading-reducer';

const root_reducer = combineReducers({
    auth: auth_reducer,
    cart: cart_reducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    currency: currency_reducer,
    loading: loading_reducer
});

export default root_reducer;