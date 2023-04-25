import './home.scss'
import Navbar from '../comps/navbar/Navbar'
import Featured from '../comps/featured/Featured';
import List from '../comps/list/List';




const Home = ({type}) => {
  return (
    <main className='home'>
      <Navbar/> 
      <Featured type=''/>
      <List/>
      <List/>
      <List/>
      <List/>
    </main>
  )
}

export default Home
