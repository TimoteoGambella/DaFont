import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function Searcher(){
    return(
        <div 
            id="input-container"
            className="input-container"
        >
            <SearchOutlinedIcon className="search" color="primary"/>
            <input
                type="text"
                placeholder={"Prueba buscando “manuscrito”"}
                className="font-16"
                // onChangeCapture={(e)=>setData(e.target.value)}
            />
            <PhotoCameraOutlinedIcon className="camera" color="primary"/>
        </div>
    )
}