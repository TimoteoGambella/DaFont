import logo from "../../assets/logowhite.svg"
import LanguageIcon from '@mui/icons-material/Language';
import { createTheme,ThemeProvider } from "@mui/material";
import Searcher from "./Searcher";
import Bar from "./Bar";

export default function Navbar(){
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
                <img src={logo} alt="LOGO" />
                
                <Searcher/>

                <p className="user font-16">Ingresa</p>
                <LanguageIcon className="language" color="secondary"/>
            </div>
            <Bar/>
        </ThemeProvider>
    )
}