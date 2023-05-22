import axios from 'axios'
import { loginFail, loginStart, loginSuccess } from './AuthActions'
import { apiRoute } from '../../utils/apiRoute'

export const login = async (user, dispatch) => {
    dispatch(loginStart)

    try {
        const res = await axios.post(apiRoute + 'auth/login', user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFail)
    }
}
