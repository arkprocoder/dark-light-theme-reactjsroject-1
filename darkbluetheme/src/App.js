import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Section from "./components/Section";
import About from "./components/About";
import { useState } from "react";

function App() {

  const [mode,setDarkMode] =useState("light")
  const [modeBlue,setBlueMode] =useState("light")
  
  const darkMode =()=>{
    if(mode==="light"){
      setDarkMode("dark")
      document.body.style.backgroundColor="black";
    }
    else{
      setDarkMode("light")
      document.body.style.backgroundColor="white";

    }
    
  }
  const blueMode =()=>{
    if(modeBlue=="light"){
      setDarkMode("dark")
      setBlueMode("dark")
      document.body.style.backgroundColor="#042743";
    }
    else{
      setDarkMode("light")
      setBlueMode("light")
      document.body.style.backgroundColor="white";

    }

  }



  return (
    <>
      <Router>
        <Navbar 
        title="Ark Pro Coder"
        aboutTxt="About Us"
        contactTxt="Contact Us"
        mode={mode}  
        darkMode={darkMode}
        blueMode={blueMode}  
        />

        <Routes>
          <Route exact path="/" element={<Section mode={mode} darkMode={darkMode} blueMode={blueMode} />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />


        </Routes>


      </Router>
    </>
  );
}

export default App;
