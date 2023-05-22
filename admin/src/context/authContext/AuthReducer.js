const AuthReducer = (state, action) => {
    switch(action.type){
        case 'LOGIN_START':
            return {
                ...state,
                fetching: true
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                user: action.payload,
                fetching: false,
            }
        case 'LOGIN_FAIL':
            return {
                ...state,
                user: null,
                error: true
            }
        default:
            return {...state}
    }
}

export default AuthReducer
