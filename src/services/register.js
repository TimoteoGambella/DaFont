export const handleRegister=async(data,setLoader,setErrorMessage,setErrorMessage2,setErrorMessage3,setErrorMessage4,setErrorMessage5,addUser,errors,setErrors,getUserByEmail,navigate,setUser)=>{
    const CryptoJS = require("crypto-js");

    setLoader(true)
    const validRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    let user=false
    let email=false
    let password=false
    let password2=false

    if(data.user===""){
        user=true
        setErrorMessage("Campo obligatorio")
    }
    if(data.email===""){
        email=true
        setErrorMessage2("Campo obligatorio")
    }
    if(data.password===""){
        password=true
        setErrorMessage3("Campo obligatorio")
    }
    if(data.password2===""){
        password2=true
        setErrorMessage4("Campo obligatorio")
    }
    if(email || password || user || password2){
        setErrors({
            password:password,
            email:email,
            user:user,
            password2:password2    
        })
        setLoader(false)
        return
    }

    if(data.user.length>15){
        setErrors({...errors,user:true})
        setErrorMessage("Máximo 15 caracteres")
        setLoader(false)
        return
    }
    
    if(!data.email.match(validRegex)){
        setErrors({...errors,email:true})
        setErrorMessage2("Correo incorrecto")
        setLoader(false)
        return
    }
    await getUserByEmail(data.email).then((res)=>{
        if(res){
            setErrors({...errors,email:true})
            setLoader(false)
            setErrorMessage2("Correo electrónico en uso")
            return
        }
    })

    addUser({
        user:data.user,
        email:data.email,
        password:data.password,
        favs:[]
    }).then((res)=>{
        if(res){
            let id = CryptoJS.AES.encrypt(res.id,'clave_secreta').toString()
            localStorage.setItem("id-dafont",id)
            setUser(res)
            setLoader(false)
            navigate("/")
        }else{
            setLoader(false)
            setErrorMessage5("Ocurrió un error. Vuelva a intentarlo")
        }
    })
}