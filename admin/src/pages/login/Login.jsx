import { useState } from 'react'
import './login.css'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext/AuthContext'
import axios from 'axios'
import { apiRoute } from '../../utils/apiRoute'

const Login = () => {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const {fetching, dispatch} = useContext(AuthContext)

const handleClick = async (e) => {
  e.preventDefault()
  dispatch({type: 'LOGIN_START'})

  try {
    const res = await axios.post(apiRoute + 'auth/login', {
      email,
      password
    })
    dispatch({type: 'LOGIN_SUCCESS', payload: res.data}) && window.location.replace('/')
  } catch (error) {
    dispatch({type: 'LOGIN_FAIL'})
  }
}

  return (
    <section className='login'>

      <form className="loginForm">
        <input 
        type="email" 
        placeholder='Email' 
        onChange={(e)=>setEmail(e.target.value)}  
        className="loginInput"
        />

        <input 
        type="password" 
        placeholder='Password' 
        onChange={(e)=>setPassword(e.target.value)}  
        className="loginInput"
        />

        <button className="loginBtn" disabled={fetching} onClick={handleClick}>Login</button>
      </form>
    </section>
  )
}

export default Login
