import { ArrowBackOutlined } from '@mui/icons-material'
import vid from '../../assets/VID_20221124_171446.mp4'
import './watch.scss'

const Watch = () => {
  return (
    <main className='watch'>
      <div className='back'>
        <ArrowBackOutlined/>
        Home
      </div>

      <video className='video' autoPlay onProgress={true} controls src={vid}/>
    </main>
  )
}

export default Watch
 