import './Navbar.scss'
import Logo from '../../assets/netflix1.jpeg'
import Profile from '../../assets/images (2).jpg'
import {ArrowDropDown, Notifications, Search} from '@mui/icons-material'
import { useState } from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false)

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        
        return () => (window.onscroll = null)
    }
   


  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className='container'>
        <div className='left'>
            <img src={Logo} alt='Logo' />
            <Link to='/' className='link'>
              <span>Home</span>
            </Link>
           
           <Link to='/series' className='link'>
             <span>Series</span>
           </Link>
           
           <Link to='/movies' className='link'>
               <span>Movie</span>
           </Link>
           
            <span>New and Popular</span>
            <span>My List</span>
        </div>

        <div className='right'>
            <Search className='icon'/>
            <span>KID</span>
            <Notifications className='icon'/>

            <img src={Profile} alt='Profile' />
            <div className='profile'>
              <ArrowDropDown className='icon'/>
              <div className='options'>
                <span>Settings</span>
                <span>Log out</span>
              </div>
            </div>
            
        </div>
        
      </div>
    </div>
  )
}

export default Navbar

