import './listItem.scss'
import img from '../../assets/images (7).jpg';
import vid from '../../assets/VID_20221124_171446.mp4'
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { apiRoute } from '../../utils/APIcalls';
import { Link } from 'react-router-dom';

const auth = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjYzNDBkYTEzODE0NmM5MmMyYjM4YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MzYyMzQ0NCwiZXhwIjoxNjg0MjI4MjQ0fQ.5ApOKBicX6-tlgA1kHi1hHk_TbYCO3RsIZZ_y_NfYzI'

const ListItem = ({index, item}) => {

  const [movie, setMovie] = useState({})

useEffect(()=> {
  const getMovie = async () => {
    try {
      const res = await axios.get(apiRoute + 'movies/find/' + item, {
        headers: {
          token: `Bearer ${auth}`
        }
      })
      setMovie(res.data)

    } catch (error) {
      console.log(error)
    }
  }
  getMovie()
}, [item])

  const [hovered, setHovered] = useState(false)
  const trailer = vid


  return (
    <Link to={{pathname: '/watch', movie: movie}}>
      <div 
        className='listItem' 
        style={{left: hovered && index * 225 - 50 + index * 2.5}}
        onMouseEnter={()=>setHovered(true)} 
        onMouseLeave={()=>setHovered(false)}
      >
        <img src={img} alt='ListItem'/>
        {
          hovered && 
          <>
              <video src={trailer} autoPlay={true} loop={true}/>

              <div className='itemInfo'>
                <div className='icons'>
                  <PlayArrow  className='icon'/>
                  <Add  className='icon'/>
                  <ThumbUpAltOutlined  className='icon'/>
                  <ThumbDownAltOutlined  className='icon'/>
                </div>

                <div className='itemInfoTop'>
                  <span>{movie.duration}</span>
                  <span className='limit'>+{movie.limit}</span>
                  <span>{movie.year}</span>
                </div>

                <div className='desc'>
                {movie.desc}
                </div>

                <div className='genre'>
                {movie.genre}
                </div>
              </div>
          </>
        }
  
      </div>
    </Link>
  )
}

export default ListItem
