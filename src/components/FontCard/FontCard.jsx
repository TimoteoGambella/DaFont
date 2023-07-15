import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DownloadIcon from '@mui/icons-material/Download';
import { useContext } from 'react';
import { UseWebContext } from '../../context/WebContext';

export default function FontCard({font}){
    const {textVisual}=useContext(UseWebContext)

    return(
        <div className="font-card">
            <p className='title font-64' style={{fontFamily:`${font.family},${font.category}`}}>{textVisual!==""?textVisual:font.family}</p>
            <FavoriteBorderIcon className='favs' color='warning'/>
            <div className='button'>
                <DownloadIcon color="secondary"/>
                <p className='font-16' style={{color:"white"}}>Descargar</p>
            </div>

            <div className='red-tick'>
                <p className='font-16'>{font.family}</p>
            </div>
        </div>
    )
}