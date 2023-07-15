import { useEffect, useState } from "react";
import { WebContext } from "./context/WebContext";
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Home from "./views/Home";
import Navbar from "./components/Navbar/Navbar";
import ChargeFonts from "./components/FontsLinks/ChargeFonts";

function App() {

  return (
    <WebContext>
      <Router>
        <Navbar/> 
        <ChargeFonts/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </WebContext>
  );
}

export default App;