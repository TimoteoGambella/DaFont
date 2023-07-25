import { Fragment, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UseUserContext } from "../../context/UserContext"
import Swal from "sweetalert2"

export default function Bar(){
    const navigate = useNavigate()
    const {user,setUser}=useContext(UseUserContext)

    const barList=[
        {title:"Estilos",route:"/"},
        {title:"Autores",route:"/"},
        {title:"Comunidad",route:"/"},
        {title:"Identificar fuente",route:"/"},
        {title:"Aportar fuente",route:"/"},
        {title:"Favoritos",route:"/Favs"},
        {title:"Cerrar sesión"}
    ]

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
                window.location.reload()
            }
        })
    }

    return(
        <div className="bar-container">
            {barList.map((obj,i)=>{
                return(
                    <Fragment key={i}>
                        {obj.title!=="Cerrar sesión" && 
                            <p onClick={()=>navigate(obj.route)} className="font-16">{obj.title}</p>
                        }
                        {obj.title==="Cerrar sesión" && user && 
                            <p className="font-16" onClick={()=>handleSesion()}>{obj.title}</p>
                        }
                    </Fragment>
                )
            })}
        </div>
    )
}