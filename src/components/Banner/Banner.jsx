import { useNavigate } from "react-router-dom"

export default function Banner({text,route}){
    const navigate = useNavigate()

    return(
        <div className="banner">
            <div className="fondo"></div>
            <div className="container">
                <p className="first">Accede a las 70,000 fonts que tenemos para ti</p>
                {text==="login" ? 
                    <p className="second">¿No tienes cuenta?  <span onClick={()=>navigate(route)}>Regístrate aquí</span></p>
                    :
                    <p className="second">¿Ya tienes cuenta?  <span onClick={()=>navigate(route)}>Inicia sesión aquí</span></p>
                }
            </div>
        </div>
    )
}