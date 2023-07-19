import { useNavigate } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useContext, useState } from "react";
import { UseUserContext } from "../context/UserContext";
import Loader from "../components/Loader/Loader";
import Input from "../components/Input/Input";
import GoogleIcon from '@mui/icons-material/Google';
import { handleRegister } from "../services/register";

export default function Register(){
    const navigate = useNavigate()
    const {getUserByEmail,setUser,mainLoader,addUser}=useContext(UseUserContext)

    const [data,setData]=useState({
        user:"",
        email:"",
        password:"",
        password2:""
    })

    const [errors,setErrors]=useState({
        password:false,
        email:false,
        user:false,
        password2:false
    })
    const [errorMessage,setErrorMessage]=useState("")
    const [errorMessage2,setErrorMessage2]=useState("")
    const [errorMessage3,setErrorMessage3]=useState("")
    const [errorMessage4,setErrorMessage4]=useState("")
    const [errorMessage5,setErrorMessage5]=useState("")

    const [showPass,setShowPass]=useState(false)
    const [loader,setLoader]=useState(false)

    const handleChange=(e,dataName)=>{
        setErrors({...errors,[dataName]:false})
        setErrorMessage5("")
        setData({...data,[dataName]:e})
    }

    const submit=()=>{
        handleRegister(data,setLoader,setErrorMessage,setErrorMessage2,setErrorMessage3,setErrorMessage4,setErrorMessage5,addUser,errors,setErrors,getUserByEmail,navigate,setUser)
    }

    return(
        <div className="register-container">
            <ArrowBackIcon className="arrow-back" onClick={()=>navigate(-1)}/>
            <Banner text={"register"} route={"/Login"}/>
            {mainLoader ?
                <div style={{width:"50%"}}>
                    <Loader/> 
                </div> 
                : 
                <div className="login">
                    <div className="container">
                        <h1 className="font-40">Registrate</h1>
                        <div className="input">
                            <Input extraClass={"input-login"} label="Usuario" helper={errorMessage} error={errors.user} handleChange={handleChange} nameData={"user"}/>
                            <Input extraClass={"input-login"} label="Correo electrónico" helper={errorMessage2} error={errors.email} handleChange={handleChange} nameData={"email"}/>
                            <Input extraClass={"input-login"} label="Contraseña" pass={true} helper={errorMessage3} showPass={showPass} setShowPass={setShowPass} error={errors.password} handleChange={handleChange} nameData={"password"}/>
                            <Input extraClass={"input-login"} label="Repetir contraseña" pass={true} helper={errorMessage4} showPass={showPass} setShowPass={setShowPass} error={errors.password2} handleChange={handleChange} nameData={"password2"}/>
                            {errorMessage5!==""&&<p className="font-16" style={{color:"#F73939"}}>{errorMessage5}</p>}
                        </div>
                        <div className="button-container">
                            {loader ? <Loader/> :
                                <button className="button-1" onClick={()=>submit()}>
                                    <p className="font-16">Registrarme</p>
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