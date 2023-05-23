import axios from 'axios'
import { loginFail, loginStart, loginSuccess } from './AuthActions'
import { apiRoute } from '../../utils/apiRoute'




export const LoginCall = async (user, dispatch) => {

    dispatch(loginStart())

    try {
        const res = await axios.post(apiRoute + 'auth/login', user)
        res.data.isAdmin  &&  dispatch(loginSuccess(res.data)) && window.location.replace('/')
       
    } catch (error) {
        dispatch(loginFail())
    }
}
