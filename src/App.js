import { useEffect, useState } from "react";
import { WebContext } from "./context/WebContext";
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Home from "./views/Home";

function App() {

  return (
    <WebContext>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </Router>
    </WebContext>
  );
}

export default App;