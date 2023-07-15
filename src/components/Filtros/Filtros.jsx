import TuneIcon from '@mui/icons-material/Tune';
import VisibilityIcon from '@mui/icons-material/Visibility';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { createTheme,ThemeProvider } from '@mui/material';

export default function Filtros(){
    const theme = createTheme({
        palette:{
            primary:{
                main:"#FFFFFF"
            }
        },
    })

    return(
        <ThemeProvider theme={theme}>
            <div className="filtros-container">
                <h1 className='font-34 title'>Últimas agregadas</h1>
                <div className='filtros'>
                    <input type="text font-16" placeholder="Escribe algo aqui para previsualizarlo"/>
                    <div className='red-back'>
                        <TuneIcon color="primary"/>
                        <p className='font-16' style={{color:"white"}}>Filtros</p>
                    </div>
                    <div>
                        <VisibilityIcon/>
                        <p className='font-16'>Previsualizar</p>
                    </div>
                    <div>
                        <RestartAltIcon/>
                        <p className='font-16'>Reiniciar</p>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}