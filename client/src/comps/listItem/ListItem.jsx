import './listItem.scss'
import img from '../../assets/images (7).jpg';
import vid from '../../assets/VID_20221124_171446.mp4'
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material'
import { useState } from 'react'

const ListItem = ({index}) => {
  const [hovered, setHovered] = useState(false)
  const trailer = vid

  return (
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
                <span>1 hour 19mins</span>
                <span className='limit'>+18</span>
                <span>2005</span>
              </div>

              <div className='desc'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure aut et, nam ratione praesentium aperiam obcaecati est natus dicta tempore
              </div>

              <div className='genre'>
                Action
              </div>
            </div>
        </>
      }
 
    </div>
  )
}

export default ListItem
