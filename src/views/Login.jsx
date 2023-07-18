import {  useContext, useEffect, useState } from "react";
import Input from "../components/Input/Input";
import GoogleIcon from '@mui/icons-material/Google';
import Loader from "../components/Loader/Loader";
import { UseUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const CryptoJS = require("crypto-js");
    const navigate = useNavigate()

    const {getUser,getUserById,setUser}=useContext(UseUserContext)

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
    const [mainLoader,setMainLoader]=useState(true)

    useEffect(() => {
        if(localStorage.getItem("id-dafont")){
            getUserById(localStorage.getItem("id-dafont")).then((res)=>{
                if(res){
                    setUser(res)
                    navigate("/")
                }
            })
        }else{
            setMainLoader(false)
        }
    }, []);

    const handleChange=(e,dataName)=>{
        setErrors({...errors,[dataName]:false})
        setErrorMessage3("")
        setData({...data,[dataName]:e})
    }

    const handleSubmit=()=>{
        setLoader(true)
        const validRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
        let email=false
        let password=false

        if(data.email===""){
            email=true
            setErrorMessage("Campo obligatorio")
        }
        if(data.password===""){
            password=true
            setErrorMessage2("Campo obligatorio")
        }
        if(email || password){
            setErrors({
                password:password,
                email:email    
            })
            setLoader(false)
            return
        }
        
        if(!data.email.match(validRegex)){
            setErrors({...errors,email:true})
            setErrorMessage("Correo incorrecto")
            setLoader(false)
            return
        }
        if(data.password.length<10){
            setErrors({...errors,password:true})
            setErrorMessage2("Mínimo 10 caracteres")
            setLoader(false)
            return
        }

        getUser(data.email,data.password).then((res)=>{
            if(res){
                let id = CryptoJS.AES.encrypt(res.id,'clave_secreta').toString()
                localStorage.setItem("id-dafont",id)
                setUser(res)
                setLoader(false)
                navigate("/")
            }else{
                setLoader(false)
                setErrorMessage3("El usuario es incorrecto o no existe")
            }
        })
    }

    return(
        <div className="login-container">
            <div className="banner">
                <div className="fondo"></div>
                <div className="container">
                    <p className="first">Accede a las 70,000 fonts que tenemos para ti</p>
                    <p className="second">¿No tienes cuenta?  <span>Regístrate aquí</span></p>
                </div>
            </div>
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
                                <button className="button-1" onClick={()=>handleSubmit()}>
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