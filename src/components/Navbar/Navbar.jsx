import logo from "../../assets/logowhite.svg"
import LanguageIcon from '@mui/icons-material/Language';
import { createTheme,ThemeProvider } from "@mui/material";
import Searcher from "./Searcher";
import Bar from "./Bar";
import { useNavigate } from "react-router-dom";

export default function Navbar(){
    const navigate = useNavigate()

    const theme = createTheme({
        palette:{
            primary: {
                main:"#444444"
            },
            secondary:{
                main:"#FFFFFF"
            }
        },
    });
      
    return(
        <ThemeProvider theme={theme}>
            <div className="navbar-container">
                <img className="logo" src={logo} alt="LOGO" onClick={()=>navigate("/")}/>
                
                <Searcher/>

                <p className="user font-16">Ingresa</p>
                <LanguageIcon className="language" color="secondary"/>
            </div>
            <Bar/>
        </ThemeProvider>
    )
}