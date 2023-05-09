import './home.scss'
import Navbar from '../../comps/navbar/Navbar'
import Featured from '../../comps/featured/Featured';
import List from '../../comps/list/List';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { apiRoute } from '../../utils/APIcalls';


const auth = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjYzNDBkYTEzODE0NmM5MmMyYjM4YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MzYyMzQ0NCwiZXhwIjoxNjg0MjI4MjQ0fQ.5ApOKBicX6-tlgA1kHi1hHk_TbYCO3RsIZZ_y_NfYzI'



const Home = ({type}) => {

  
  const [lists, setLists] = useState([])
  const [genre, setGenre] = useState(null)

  const url = `${apiRoute}list/${type ? '?type=' + type : '' && genre ? '?genre=' + genre: ''}`
  
  

  useEffect(()=> {
    const getRandomList = async (req, res) => {
      try {
        const res = await axios.get(url, {
          headers: {
            token: `Bearer ${auth}`
          },
        })
        setLists(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getRandomList()
  }, [url])

  return (
    <main className='home'>
      <Navbar/> 
      <Featured type={type}/>
      {
        lists.map((list) => (
          <List key={list._id} list={list}/>
        ))
      }
    </main>
  )
}

export default Home
