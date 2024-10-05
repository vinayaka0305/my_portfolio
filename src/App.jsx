import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import "./App.css";
import MatterComponent from "./components/MatterComponent";
import AboutMe from "./components/AboutMe";
import HomeComponent from "./components/HomeComponent";
import LatestWorks from "./components/LatestWorks";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/latest" element={<LatestWorks/>}/>
          <Route path="/aboutme" element={<AboutMe/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
