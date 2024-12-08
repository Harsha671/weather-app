// import React from "react";

// import "./Home.css"
// function Home(){
//     return(<div className="home">
//        <div className="home1">
//         <h1>Hi,I'm Harsha Vardhan</h1>
//         <h2>Full Stack Web Developer</h2> <br />
//         {/* <p>This is my offical Portifolio to showcase <br /> my all works  related to web development  <br />and ui design. </p>  */}
//         {/* <a href=".././public/Harsha Resume docx.pdf" target="_blank"><button > Download CV</button> </a> */}
//         <i className="bi bi-linkedin" style={{ color: "#0077B5", fontSize: "2rem"}}></i>
//         <i className="bi bi-github" style={{ color: "white", fontSize: "2rem" }}></i>
//         <i className="bi bi-twitter" style={{ color: "#1DA1F2", fontSize: "2rem", marginRight: "10px" }}></i>
//         <i className="bi bi-facebook" style={{ color: "#4267B2", fontSize: "2rem", marginRight: "10px" }}></i>
//         <i className="bi bi-instagram" style={{ color: "#E1306C", fontSize: "2rem" }}></i>

    



//        </div>
//          <div className="home2">
//          <img src=".././public/photo.jpg" alt=""  width={"400px"} height={"350px"}/>
//          </div>
//     </div>)
// }
// export default Home;
import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home1">
        <h1>
          Hi, <span>I'm</span> <span>Harsha</span> <span>Vardhan</span>
        </h1>
        <h2>
          <span>Full</span> <span>Stack</span><span>Web</span> <span>Developer</span>
        </h2>
        <br />

        {/* Social Media Icons */}
        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin" style={{ color: "#0077B5", fontSize: "2rem" }}></i>
        </a>
        <a href="https://github.com/Harsha671" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-github" style={{ color: "white", fontSize: "2rem" }}></i>
        </a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-twitter" style={{ color: "#1DA1F2", fontSize: "2rem", marginRight: "10px" }}></i>
        </a>
        <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-facebook" style={{ color: "#4267B2", fontSize: "2rem", marginRight: "10px" }}></i>
        </a>
        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram" style={{ color: "#E1306C", fontSize: "2rem" }}></i>
        </a>
      </div>

      <div className="home2">
        <img src="/photo1.jpg" alt="Harsha Vardhan" width="400px" height="350px" />
      </div>
    </div>
  );
}

export default Home;
