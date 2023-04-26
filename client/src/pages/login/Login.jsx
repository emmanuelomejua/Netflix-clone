import './login.scss'
import Logo from '../../assets/netflix1.jpeg'

const Login = () => {
  return (
    <main className='login'>
     <section className='rTop'>
        <div className='rWrapper'>
            <img src={Logo} alt='Logo' className='logo'/>
            
        </div>
      </section>

      <section className='rContainer'>
        <form>
            <h1>Welcome Back!</h1>
            <input type="email" className="" placeholder='Email'/>
            <input type="password" className="" placeholder='Password' />
            <button>Login</button>
            <span className='pText'>Forget Password?</span>

            <span>New to Netflix? <span>Sign up now!</span></span>
            {/* <p>This page is protected by Google reCAPTHA to ensure you're not a bot. <b>Learn More</b></p> */}
        </form>
      </section>

    </main>
  )
}

export default Login
