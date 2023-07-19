export const handleLogin=(data,setLoader,setErrorMessage,setErrorMessage2,setErrorMessage3,errors,setErrors,getUser,navigate,setUser)=>{
    const CryptoJS = require("crypto-js");
    console.log(data)
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