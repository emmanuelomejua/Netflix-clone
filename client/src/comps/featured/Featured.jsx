import './featured.scss';
// import img from '../../assets/images (10).jpg'
import img1 from '../../assets/images (4).jpg'
import { InfoOutlined, PlayArrow } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { apiRoute } from '../../utils/APIcalls';

const auth = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjYzNDBkYTEzODE0NmM5MmMyYjM4YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MzYyMzQ0NCwiZXhwIjoxNjg0MjI4MjQ0fQ.5ApOKBicX6-tlgA1kHi1hHk_TbYCO3RsIZZ_y_NfYzI'



const Featured = ({type}) => {

  const [content, setContent] = useState({})

  useEffect(()=> {
    const getRandom = async () => {
      try {
        const res = await axios.get(`${apiRoute}movies/random?type=${type}`, {
          headers: {
            token: `Bearer ${auth}`
          }
        })
        setContent(res.data[0])
      } catch (error) {
        console.log(error)
      }
    }
    getRandom()
  }, [type])

  return (
    <div className='featured'>
        {type && (
            <div className='category'>
                <span>{type === 'series' ? 'Series': 'Movies'}</span>

                <select name='genre' id='genre'>
                    <option>Genre</option>
                    <option value='adventure'>Adventure</option>
                    <option value='comedy'>Comedy</option>
                    <option value='crime'>Crime</option>
                    <option value='fantasy'>Fantasy</option>
                    <option value='historical'>Historical</option>
                    <option value='horror'>Horror</option>
                    <option value='romance'>Romance</option>
                    <option value='sci-fi'>Sci-fi</option>
                    <option value='thriller'>Thriller</option>
                    <option value='western'>Western</option>
                    <option value='animation'>Animation</option>
                    <option value='drama'>Drama</option>
                    <option value='documentery'>Documentery</option>
                  
                </select>
            </div>

            
        )}
      {/* <img src={img} alt='Featured' /> */}

      <div className='info'>
        <img src={img1}  alt='Info'/>

        <span className='desc'>{content.desc}</span>

        <div className='buttons'>
            <button className='play'>
                <PlayArrow/>
                <span>Play</span>
            </button>
            <button className='more'>
                <InfoOutlined/>
                <span>Info</span>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Featured
