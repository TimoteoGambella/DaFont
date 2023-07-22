import TuneIcon from '@mui/icons-material/Tune';
import VisibilityIcon from '@mui/icons-material/Visibility';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useContext } from 'react';
import { UseWebContext } from '../../context/WebContext';

export default function Filtros({text,filters}){

    const {textVisual,setTextVisual}=useContext(UseWebContext)

    return(
        <div className="filtros-container">
            <h1 className={`font-34 title ${!filters?"favs":""}`}>{text}</h1>
            {filters && 
                <div className='filtros'>
                    <input id="input-filtros" type="text font-16" placeholder="Escribe algo aqui para previsualizarlo" defaultValue={textVisual} onChangeCapture={(e)=>setTextVisual(e.target.value)}/>
                    <div className='red-back'>
                        <TuneIcon color="secondary"/>
                        <p className='font-16' style={{color:"white"}}>Filtros</p>
                    </div>
                    <div>
                        <VisibilityIcon/>
                        <p className='font-16'>Previsualizar</p>
                    </div>
                    <div onClick={()=>{
                        setTextVisual("")
                        document.getElementById("input-filtros").value=""
                    }}>
                        <RestartAltIcon/>
                        <p className='font-16'>Reiniciar</p>
                    </div>
                </div>
            }
        </div>
    )
}