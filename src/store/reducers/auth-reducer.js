const initState = {
    authError: null,
    isAdmin: false,
    isLoaded: false
};

const auth_reducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOGIN_ERROR':
            console.log('login error');
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signed out');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('signed up');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('signup error');
            return {
                ...state,
                authError: action.error.message
            }
        case 'IS_ADMIN':
            console.log('is admin');
            return {
                ...state,
                isAdmin: action.payload
            };
        case 'LOAD_COMPLETE':
            return {
                ...state,
                isLoaded: true
            }
        default:
            return state;
    }
}

export default auth_reducer;