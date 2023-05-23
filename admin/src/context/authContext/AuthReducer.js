const AuthReducer = (state, action) => {
    switch(action.type){
        case 'LOGIN_START':
            return {
                user: null,
                error: false,
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
                fetching: false,
                user: null,
                error: true
            }
        case 'LOGOUT':
            return {
                fetching: false,
                user: null,
                error: false
            }
        default:
            return {...state}
    }
}

export default AuthReducer
