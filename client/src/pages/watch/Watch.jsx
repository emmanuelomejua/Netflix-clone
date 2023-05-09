import { ArrowBackOutlined } from '@mui/icons-material'
import vid from '../../assets/VID_20221124_171446.mp4'
import './watch.scss'
import { Link, useLocation } from 'react-router-dom'

const Watch = () => {
  const location = useLocation()
  const movie = location.movie;

  return (
    <main className='watch'>
      <Link to='/'>
        <div className='back'>
          <ArrowBackOutlined/>
          Home
        </div>
      </Link>

      <video className='video' autoPlay onProgress={true} controls src={vid}/>
    </main>
  )
}

export default Watch
 