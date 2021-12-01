import React from "react";
import Cantshow from "../Assets/Can't show.svg"
import '../Css/more-work.css'
import Toast from "./Toast";
import VM from "./VM";


function MoreWorkMain() {
    return (
      <div className="container">
          
          <div className="more-work">
          <h2 className="more-work-heading">SOME MORE WORK</h2>
          <img className="cantshow-img" src={Cantshow}></img>
          <div className="projects-flexbox">
            <Toast/>
            <VM />
            <VM />
          </div>
       </div>

      </div>
    );
  }
  
  export default MoreWorkMain;
  