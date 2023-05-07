import './login.scss'
import Logo from '../../assets/netflix1.jpeg'
import { Link } from 'react-router-dom'

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

            <section>
              <button className='lBtn'>Login</button>

              <div className="pText">
                <div className="pTextL"> 
                    <label htmlFor='checkbox'>Remember me</label>
                    <input type='checkbox' defaultChecked style={{backgroundColor:'#222', color: '#222'}}/>
                </div>

                <span style={{cursor: 'pointer'}}>Need help?</span>
              </div>
            </section>
            
            <div className="summary">
              <span>New to Netflix? <b><Link to='/register' className="link">Sign up now!</Link></b></span>
              <p>This page is protected by Google reCAPTHA to ensure you're not a bot. <b>Learn More</b></p>
            </div>
  
        </form>
      </section>

    </main>
  )
}

export default Login
