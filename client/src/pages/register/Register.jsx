import './register.scss'
import Logo from '../../assets/netflix1.jpeg'
import { useRef, useState } from 'react'

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailRef = useRef()
    const passwordRef = useRef()

    const handleStart = () => {
        setEmail(emailRef.current.value)
    }

    const handleFinish = () => {
        setPassword(passwordRef.current.value)
    }
  return (
    <main className='register'>
      <div className='rTop'>
        <div className='rWrapper'>
            <img src={Logo} alt='Logo' className='logo'/>
            
            <button className='loginBtn'>Login</button>
        </div>
      </div>

      <div className="rContainer">
        <h1>Unlimited movies, Tv shows, and more...</h1>
        <h2>Watch anywhere. Cancel anytime</h2>
        <p>Ready to watch? Enter your email to create or restart your membership</p>

        {
            !email ?   
           (
            <>
              <div className='rInput'>
                <input type="email" className="" placeholder='Enter your email...' ref={emailRef}/>
                 <button onClick={handleStart}>Get started</button>
              </div>
            </>
            ) : 
            (
                <>
                    <form className='rInput'>
                      <input type="password" className="" placeholder='Password' ref={passwordRef}/>
                      <button onClick={handleFinish}>Start</button>
                    </form>
                </>
            )
        }
    
      </div>
    </main>
  )
}

export default Register
