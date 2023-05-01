import React from "react";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contact/Contact";
import "./App.css";
import Skills from "./components/Skills/Skills";
import Home from "./components/Home/Home";
import SocialLinks from "./components/SocialLinks";


function App () {
  return (

    <main>
      <NavBar /> 
      <Home />
      <About/>
      <Projects/>
      <Skills />
      <Contacts/> 
      <SocialLinks/>
    </main>  
  );
}

export default App;