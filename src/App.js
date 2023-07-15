import { WebContext } from "./context/WebContext";
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Home from "./views/Home";
import Navbar from "./components/Navbar/Navbar";
import ChargeFonts from "./components/FontsLinks/ChargeFonts";
import { ThemeProvider, createTheme } from "@mui/material";

function App() {
  const theme = createTheme({
    palette:{
        primary: {
            main:"#444444"
        },
        secondary:{
            main:"#FFFFFF"
        },
        warning:{
          main:"#CC0000"
        }
    },
});

  return (
    <ThemeProvider theme={theme}>
      <div className="principal-container">
        <WebContext>
          <Router>
            <Navbar/> 
            {/* <ChargeFonts/> */}
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        </WebContext>
      </div>
    </ThemeProvider>
  );
}

export default App;