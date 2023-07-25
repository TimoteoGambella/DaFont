import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DownloadIcon from '@mui/icons-material/Download';
import { useContext, useEffect, useState } from 'react';
import { UseWebContext } from '../../context/WebContext';
import { useNavigate } from 'react-router-dom';
import { UseUserContext } from '../../context/UserContext';
import logo from "../../assets/popUp.png";
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function FontCard({font}){
    const {textVisual}=useContext(UseWebContext)
    const {user,updateUser}=useContext(UseUserContext)
    const navigate = useNavigate()

    const [download,setDownload]=useState(false)
    const [inFav,setInFav]=useState(false)
    const [working,setWorking]=useState(false)

    useEffect(() => {
        if(user){
            if(user.favs.find(e=>e.family===font.family)){
                setInFav(true)
            }
        }
    }, []);

    const handleDownload=()=>{
        if(!user){
            navigate("/Login")
        }else{
            setDownload(true)
            
        }
    }
    const handleFavs=()=>{
        setWorking(true)
        if(!user){
            setWorking(false)
            navigate("/Login")
        }else{
            if(!working){
                if(inFav){
                    let newArray=user.favs.filter(e=>e.family!==font.family)
                    updateUser(user.id,newArray)
                    setInFav(false)
                    setWorking(false)
                }else{
                    let newArray=[...user.favs,font]
                    updateUser(user.id,newArray)
                    setInFav(true)
                    setWorking(false)
                }
            }
        }
    }
    return(
        <>
            <div className="font-card">
                <p className='title font-64' style={{fontFamily:`${font.family},${font.category}`}}>{textVisual!==""?textVisual:font.family}</p>
                {inFav ? 
                    <FavoriteIcon className='favs' color='warning' onClick={()=>handleFavs()}/>
                :
                    <FavoriteBorderIcon className='favs' color='warning' onClick={()=>handleFavs()}/>
                }
                <div className='button' onClick={()=>handleDownload()}>
                    <DownloadIcon color="secondary"/>
                    <p className='font-16' style={{color:"white"}}>Descargar</p>
                </div>

                <div className='red-tick'>
                    <p className='font-16'>{font.family}</p>
                </div>
            </div>

            {download && 
                <div className='download-popUp'>
                    <div className='popUp'>
                        <h3 className='title font-34'>La descarga comenzará en breve</h3>
                        <img src={logo} alt="LOGO" />
                        <div style={{width:"455px",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"18px"}}>
                            <p className='font-18-bold'>¿No sabes cómo instalar esta fuente?</p>
                            <p><span className='font-18-bold'>Paso 1:</span>Descomprime el archivo descargado aquí</p>
                            <p><span className='font-18-bold'>Paso 2(Windows):</span>Clic derecho el archivo .oft o .tff “Instalar para todos los usuarios”</p>
                            <p><span className='font-18-bold'>Paso 2(Mac):</span>Doble clic en el archivo .oft o .tff “Instalar tipo de letra”</p>
                            <p className='font-18-bold'>¡Y listo! Disfruta de esta tipografía.</p>
                        </div>
                        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"18px"}}>
                            <div className='button' onClick={()=>setDownload(false)}>Cancelar</div>
                            <div className='button' onClick={()=>window.open(font.menu)}>Aceptar</div>
                        </div>
                    </div>
                    <div className='fondo' onClick={()=>setDownload(false)}></div>
                </div>
            }
        </>
    )
}