import logo from "../../assets/logowhite.svg"
import LanguageIcon from '@mui/icons-material/Language';
import Searcher from "./Searcher";
import Bar from "./Bar";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UseUserContext } from "../../context/UserContext";

export default function Navbar(){
    const navigate = useNavigate()
    const {user,mainLoader}=useContext(UseUserContext)

    return(
        <div className="navbar-container">
            <div className="first-navbar">
                <img className="logo" src={logo} alt="LOGO" onClick={()=>navigate("/")}/>
                
                <Searcher/>

                <p className="user font-16" onClick={()=>{
                    if(!user){
                        navigate("/Login")
                    }
                }}>{user?user.user:!mainLoader&&"Ingresa"}</p>
                <LanguageIcon className="language" color="secondary"/>
            </div>
            <Bar/>
        </div>
    )
}