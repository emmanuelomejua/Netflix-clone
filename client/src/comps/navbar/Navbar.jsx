import './Navbar.scss'
import Logo from '../../assets/netflix1.jpeg'
import Profile from '../../assets/images (2).jpg'
import {ArrowDropDown, Notifications, Search} from '@mui/icons-material'
import { useState } from 'react'

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
            <span>Home</span>
            <span>Series</span>
            <span>Movie</span>
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

