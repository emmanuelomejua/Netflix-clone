export const loginStart = () => ({
    type: 'LOGIN_START'
})

export const loginSuccess = (state) => ({
    type: 'LOGIN_SUCCESS',
    state: state.user
})

export const loginFail = () => ({
    type: 'LOGIN_Fail'
})