const initState = {
    auth_error: null
};

const auth_reducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOGIN_ERROR':
            console.log('login error');
            return {
                ...state,
                auth_error: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                auth_error: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signed out');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('signed up');
            return {
                ...state,
                auth_error: null
            }
        case 'SIGNUP_ERROR':
            console.log('signup error');
            return {
                ...state,
                auth_error: action.error.message
            }
        default:
            return state;
    }
}

export default auth_reducer;