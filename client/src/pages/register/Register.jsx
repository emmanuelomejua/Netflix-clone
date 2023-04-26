import './register.scss'
import Logo from '../../assets/netflix1.jpeg'

const Register = () => {
  return (
    <main className='register'>
      <div className='rTop'>
        <img src={Logo} alt='Logo' className='logo'/>

        <button className='loginBtn'>Login</button>
      </div>

      <div className="rContainer">
        <h1>Unlimited movies, Tv shows, and more...</h1>
        <h2>Watch anywhere. Cancel anytime</h2>
        <p>Ready to watch? Enter your email to create or restart your membership</p>

        <div className='rInput'>
            <input type="email" className="" placeholder='Enter your email...'/>
            <button className="rBtn">Get started</button>
        </div>
      </div>
    </main>
  )
}

export default Register
