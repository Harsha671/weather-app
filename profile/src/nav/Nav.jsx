import React from "react";
import "./Nav.css"
import { Link } from "react-router-dom";
function Nav(){
    return(<div>
        <div className="navbox">
        <div className="nav1">
            <h2>HARSHA.</h2>
        </div>
        <div className="nav2">
            <Link to="/"><b><i class="bi bi-house"></i> Home</b></Link>
            <Link to="/About"><b><i class="bi bi-person"></i>About</b></Link>
            <Link to="/Skills"><b><i class="bi bi-lightbulb"></i>Skills</b></Link>
             <Link to="/Education"><b><i class="bi bi-book"></i>Education</b></Link>
             <Link to="/ContactUs"><b><i class="bi bi-telephone"></i>Contact Us</b></Link>
        </div>
        </div>
    </div>)
}
export default Nav;