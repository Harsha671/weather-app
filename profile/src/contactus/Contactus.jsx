import React from "react";
import "./Contactus.css"
function Contactus(){
    return(<div>
        <div className="contact">
        <h1 style={{textAlign:"center",fontSize:"50px",color:"blue",paddingTop:"10px"}}>ContactMe!</h1>
        <div className="in">
        <input type="text" placeholder="Your name" /> <br />
        <input type="email" placeholder=" Your Email" /> <br />
        <input type="text" placeholder="Subject" />
        <input id="msg" type="text" placeholder="Your Message" /> <br /> <br />
        <button style={{fontSize:"25px",marginLeft:"40%",borderRadius:"10px",backgroundColor:"blue",color:"white"}}>Submit</button>
        </div>
        </div>
    </div>)
}
export default Contactus;