import React from "react";
import Nav from "./nav/Nav";
import Home from "./home/Home";
import About from "./about/About";
import Skills from "./skills/Skills";
import Contactus from "./contactus/Contactus";
// import Education from "./education/Education";
import { Routes,Route } from "react-router-dom";
function App(){
  return (<div>
  <Nav/>
  <Routes>
    <Route path={"/"} element={<Home/>}/>
    <Route path={"/About"} element={<About/>}/>
    <Route path={"/Skills"} element={<Skills/>}/>
    <Route path={"/ContactUs"} element={<Contactus/>}/>
    {/* <Route path={"/Education"} element={<Education/>}/> */}
  </Routes>
  </div>)
}
export default App;
