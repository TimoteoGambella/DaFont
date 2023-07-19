import { Fragment, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UseUserContext } from "../../context/UserContext"
import Swal from "sweetalert2"

export default function Bar(){
    const navigate = useNavigate()
    const {user,setUser}=useContext(UseUserContext)

    const barList=["Estilos","Autores","Comunidad","Identificar fuente","Aportar fuente","FAQ","Cerrar sesión"]

    const handleSesion=()=>{
        Swal.fire({
            title: '¿Cerrar sesión?',
            showDenyButton: true,
            confirmButtonText: 'Aceptar',
            denyButtonText: `Cancelar`,
        }).then((result) => {
            if (result.isConfirmed) {
                setUser(null)
                localStorage.removeItem("id-dafont")
            }
        })
    }

    return(
        <div className="bar-container">
            {barList.map((obj,i)=>{
                return(
                    <Fragment key={i}>
                        {obj!=="Cerrar sesión" && 
                            <p className="font-16">{obj}</p>
                        }
                        {obj==="Cerrar sesión" && user && 
                            <p className="font-16" onClick={()=>handleSesion()}>{obj}</p>
                        }
                    </Fragment>
                )
            })}
        </div>
    )
}