
import firebase from "firebase/app";
import "firebase/auth";

export const signIn = (credentials) => {
    return (dispatch, getState) => {

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' })
        }).catch((error) => {
            dispatch({ type: 'LOGIN_ERROR', error })
        });
    }
}

export const signOut = () => {
    return (dispatch, getState) => {
        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' });
        });
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((data) => {
            return firestore.collection('users').doc(data.user.uid).set({
                firstName: newUser.first_name,
                lastName: newUser.last_name,
                email: newUser.email,
                initials: newUser.first_name[0] + newUser.last_name[0]
            }).then(() => {
                dispatch({ type: 'SIGNUP_SUCCESS' });
            })
        }).catch((error) => {
            dispatch({ type: 'SIGNUP_ERROR', error });
        })
    }
}

export const isAdmin = (payload) => dispatch => {
    dispatch({ type: 'IS_ADMIN', payload });
    dispatch({ type: 'LOAD_COMPLETE' });
}