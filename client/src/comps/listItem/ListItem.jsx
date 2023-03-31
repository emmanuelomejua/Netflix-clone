import './listItem.scss'
import img from '../../assets/images (7).jpg'
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material'

const ListItem = () => {
  return (
    <div className='listItem'>
      <img src={img} alt=''/>

      <div className='itemInfo'>
        <div className='icons'>
          <PlayArrow/>
          <Add/>
          <ThumbUpAltOutlined/>
          <ThumbDownAltOutlined/>
        </div>

        <div className='itemInfoTop'>
          <span>1 hour 19mins</span>
          <span className='limit'>+18</span>
          <span>2005</span>
        </div>

        <div className='desc'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure aut et, nam ratione praesentium aperiam obcaecati est natus dicta tempore? Blanditiis debitis placeat eos reiciendis cupiditate quasi numquam, exercitationem fugiat?
        </div>

        <div className='genre'>
          Action
        </div>
      </div>
    </div>
  )
}

export default ListItem
