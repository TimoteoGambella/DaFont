import { WebContext } from "./context/WebContext";
import { UserContext } from "./context/UserContext";
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Home from "./views/Home";
import { ThemeProvider, createTheme } from "@mui/material";
import Login from "./views/Login";
import Register from "./views/Register";

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
        },
        grey:{
          main:"#49454F"
        }
    },
});

  return (
    <ThemeProvider theme={theme}>
      <div className="principal-container">
        <WebContext>
          <UserContext>
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
              </Routes>
            </Router>
          </UserContext>
        </WebContext>
      </div>
    </ThemeProvider>
  );
}

export default App;