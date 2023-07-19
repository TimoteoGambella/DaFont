import {  useContext, useState } from "react";
import Input from "../components/Input/Input";
import GoogleIcon from '@mui/icons-material/Google';
import Loader from "../components/Loader/Loader";
import { UseUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Banner from "../components/Banner/Banner";
import {handleLogin} from "../services/login"

export default function Login(){
    const navigate = useNavigate()

    const {getUser,mainLoader,setUser}=useContext(UseUserContext)

    const [data,setData]=useState({
        password:"",
        email:""
    })

    const [errors,setErrors]=useState({
        password:false,
        email:false
    })
    const [errorMessage,setErrorMessage]=useState("")
    const [errorMessage2,setErrorMessage2]=useState("")
    const [errorMessage3,setErrorMessage3]=useState("")

    const [showPass,setShowPass]=useState(false)
    const [loader,setLoader]=useState(false)

    const handleChange=(e,dataName)=>{
        setErrors({...errors,[dataName]:false})
        setErrorMessage3("")
        setData({...data,[dataName]:e})
    }

    const submit=()=>{
        handleLogin(data,setLoader,setErrorMessage,setErrorMessage2,setErrorMessage3,errors,setErrors,getUser,navigate,setUser)
    }

    return(
        <div className="login-container">
            <ArrowBackIcon className="arrow-back" onClick={()=>navigate(-1)}/>
            <Banner text={"login"} route={"/Register"}/>
            {mainLoader ?
                <div style={{width:"50%"}}>
                    <Loader/> 
                </div> 
                : 
                <div className="login">
                    <div className="container">
                        <h1 className="font-40">Inicia sesión</h1>
                        <div className="input">
                            <Input extraClass={"input-login"} label="Correo electrónico" helper={errorMessage} error={errors.email} handleChange={handleChange} nameData={"email"}/>
                            <Input extraClass={"input-login"} label="Contraseña" pass={true} helper={errorMessage2} showPass={showPass} setShowPass={setShowPass} error={errors.password} handleChange={handleChange} nameData={"password"}/>
                            {errorMessage3!==""&&<p className="font-16" style={{color:"#F73939"}}>{errorMessage3}</p>}
                        </div>
                        <div className="button-container">
                            {loader ? <Loader/> :
                                <button className="button-1" onClick={()=>submit()}>
                                    <p className="font-16">Iniciar sesión</p>
                                </button>
                            }
                            <div className="separator">
                                <div className="line"></div>
                                <p className="font-16">ó</p>
                                <div className="line"></div>
                            </div>
                            <div className="button-2">
                                <GoogleIcon />
                                <p className="font-16">Inicia sesión con Google</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}