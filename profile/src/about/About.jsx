import React from "react";
import "./About.css"
function About(){
    return(<div className="About">
    <div className="About1">
      <h1>About</h1>
      <p style={{color:"white"}}>I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.</p>
    </div>
    <div className="About2">
        <div  className="src">
        <img src=".././public/pic3.jpg" alt="" width={"400px"} height={"400px"} />
        </div>
        <div className="src1">
        <h1 id="src2">UI/UX Designer & Web Developer.</h1>
        <p style={{paddingTop:"10px"}}>To secure a challenging role in a professional environment, utilizing my educational background,strong work ethic,and willingness to take on new responsibilites to contribute to the success of the company</p>
         <p style={{paddingTop:"20px"}}><b>Email : </b>korimilliharshavardhan@gmail.com</p>
         <p style={{paddingTop:"20px"}}><b>Phone :  </b>+91 9550315237</p>
         <p style={{paddingTop:"20px"}}><b>State : </b>Andhra pradesh</p>
         <p style={{paddingTop:"20px"}}><b>Birthday : </b>22 Feb 2002</p>
         <p style={{paddingTop:"20px"}}><b>Age : </b> 22years</p>
         <p style={{paddingTop:"20px"}}><b>Degree : </b>B.Tech</p>

       
    </div>
        </div>
    </div>)
}
export default About;