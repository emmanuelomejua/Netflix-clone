import './login.css'

const Login = () => {
  return (
    <section className='login'>
      <input type="email" placeholder='Email' className="loginInput" />
      <input type="password" placeholder='Password' className="loginInput" />
    </section>
  )
}

export default Login
