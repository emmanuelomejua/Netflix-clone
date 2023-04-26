import './featured.scss';
// import img from '../../assets/images (10).jpg'
import img1 from '../../assets/images (4).jpg'
import { InfoOutlined, PlayArrow } from '@mui/icons-material';

const Featured = ({type}) => {
  return (
    <div className='featured'>
        {type && (
            <div className='category'>
                <span>{type === 'movie' ? 'Movies' : 'Series'}</span>

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

        <span className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eius culpa modi earum aliquam laudantium cum, ad eaque odit minima incidunt nulla repellendus quisquam. Repudiandae impedit labore possimus explicabo libero.</span>

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
