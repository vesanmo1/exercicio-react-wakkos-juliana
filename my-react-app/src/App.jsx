import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./scss/global.scss";
import Topbar from "./components/topbar/Topbar";
import Styleguide from "./views/styleguide/Styleguide";

function App() {

  return (
    <>
      <Topbar/>
            
      <Router>
        <Routes>
          <Route path="/styleguide" element={<Styleguide />} />
        </Routes>
      </Router>

    </>

  );
}

export default App;