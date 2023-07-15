import { useNavigate } from "react-router-dom"

export default function Bar(){
    const navigate = useNavigate()
    const barList=["Estilos","Autores","Comunidad","Identificar fuente","Aportar fuente","FAQ","Herramientas"]

    return(
        <div className="bar-container">
            {barList.map((obj,i)=>{
                return(
                    <p key={i} className="font-16">{obj}</p>
                )
            })}
        </div>
    )
}