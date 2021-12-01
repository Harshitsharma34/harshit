import React from "react";
import reactDom from "react-dom";
import '../Css/contact.css'

function Contact() {
    return (
      <div >
        <div className="contact-div">
            <h2>LET'S CATCH UP</h2>
            <div class="container-1 medium">
              <div className="flex-box">
                <div className="box-medium"></div>
                <p className="main-text">Medium</p>
              </div>
             
            </div>
	          <div class="container-1  instagram">
              <div className="flex-box">
              <div className="box-instagram"></div>
              <p className="main-text">What's happening around me.</p>
  
              </div>
              </div>
	          <div class="container-1 linkedin">
            <div className="flex-box">
              <div className="box-linkedin"></div>
              <p className="main-text">LinkedIn</p>
              </div>
              </div>
	          <div class="container-2 dribbble">
            <div className="flex-box">
            <div className="box-dribbble"></div>
              <p className="main-text">Dribbble</p>
              </div>
              </div>
	          <div class="container-2 hireme">
            <div className="flex-box">
            <div className="box-hireme"></div>
              <p className="main-text">Hire Me</p>
              </div>
              </div>
            <div class="container-2 email">
            <div className="flex-box">
            <div className="box-email"></div>
              <p className="main-text">Email</p>
              </div>
            </div>
         </div>
      </div>
     
    );
  }
  
  export default Contact;
  