
import './App.css';
import Navbar from "./Components/Navbar.js"
import TextForm from './Components/TextForm.js';
import About from './About.js';
import React,{useState} from 'react';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App(props) {
  const [mode,setmode]=useState('light')
  const toggleMode=()=>{
if(mode==='light'){
  setmode("dark")
  document.body.style.backgroundColor="grey"
  document.body.style.color="white"

}
else{
  setmode('light')
  document.body.style.backgroundColor="white"
  document.body.style.color="black"
}
  }
  return (
    <>
    <Router>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    
   
    
    <Routes>
    <Route path="/About" element={<About/>}/>
      
    
    <Route path="/" element={<TextForm mode={mode}/>}/>
    
    
    
  </Routes>


</Router>
</>
  );
  
}
export default App;





