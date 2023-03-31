import './home.scss'
import Navbar from '../comps/navbar/Navbar'
import Featured from '../comps/featured/Featured';
import List from '../comps/list/List';




const Home = () => {
  return (
    <div className='home'>
      <Navbar/> 
      <Featured />
      <List/>
      <List/>
      <List/>
      <List/>
    </div>
  )
}

export default Home
