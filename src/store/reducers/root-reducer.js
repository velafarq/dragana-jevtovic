import auth_reducer from './auth-reducer';
import cart_reducer from './cart-reducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';

const root_reducer = combineReducers({
    auth: auth_reducer,
    cart: cart_reducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

export default root_reducer;