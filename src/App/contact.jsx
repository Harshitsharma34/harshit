import React, { useState, useEffect } from "react";
import "../Css/contact.css";
import Copy from "../Assets/ctc.svg";
import copy from "copy-to-clipboard";
import Medium from "../Assets/medium.svg";
import Insta from "../Assets/insta.svg";
import Linkedin from "../Assets/linkedin.svg";
import Dribbble from "../Assets/dribbble.svg";
import Twitter from "../Assets/twitter.svg";
import Email from "../Assets/email.svg";

function Contact() {
  const copyToClipboard = () => {
    copy("harshitsharma34@gmail.com");
  };
  const [showStatements, setShowStatements] = useState(false);

  const timeId = setTimeout(() => {
    // After 3 seconds set the show value to false
    setShowStatements(false); 
  }, 3000);

  const showDiv = () => {
    setShowStatements(true);
  };

  let allStatements;
  if (showStatements) {
    allStatements = <div className="success-copy">Copied 😊</div>;
  }

  return (
    
    <div className="contact-div">
      <h2>LET'S CATCH UP</h2>
      <p className="contact-sub">
        And that's a wrap! Have I piqued your interest? Simply yell!🤓
      </p>
      <div className="footer-main">
        <a href="https://harshits.medium.com/" target="_blank">
          <div className="container-1 hover">
            <div className="icon-div">
              <img className="icon" src={Medium} />
            </div>
            <div className="text">
              <h3>Medium</h3>
              <p>Detailed research and case studies.</p>
            </div>
          </div>
        </a>
        <a href="https://www.instagram.com/harshit.sometimes/" target="_blank">
          <div className="container-1 hover">
            <div className="icon-div">
              <img className="insta" src={Insta} />
            </div>
            <div className="text">
              <h3>Instagram</h3>
              <p>What’s happening around me..</p>
            </div>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/harshitsharma34/" target="_blank">
          <div className="container-1 hover">
            <div className="icon-div">
              <img className="icon" src={Linkedin} />
            </div>
            <div className="text">
              <h3>LinkedIn</h3>
              <p>Some professional stuffs</p>
            </div>
          </div>
        </a>
        <a href="https://dribbble.com/harshitsharma" target="_blank">
          <div className="container-1 hover">
            <div className="icon-div">
              <img className="icon" src={Dribbble} />
            </div>
            <div className="text">
              <h3>Dribbble</h3>
              <p>I like Dribbbling too</p>
            </div>
          </div>
        </a>
        <a href="https://twitter.com/bruisedwaynne" target="_blank">
          <div className="container-1 hover">
            <div className="icon-div">
              <img className="icon" src={Twitter} />
            </div>
            <div className="text">
              <h3>Twitter</h3>
              <p>Look out for my tweets</p>
            </div>
          </div>
        </a>

        <div
          className="container-1 hover email "
          onClick={() => {
            copyToClipboard();
            showDiv();
          }}
        >
          {allStatements}
          <div className="icon-div email-img">
            <img className="icon" src={Email} />
          </div>
          <div className="text">
            <h3 style={{ color: "white" }}>Email </h3>
            <p style={{ color: "white" }}>harshitsharma34 @gmail.com</p>
          </div>
        </div>
      </div>
      <img className="copy-to-clipboard" type="image" src={Copy} />
    </div>
  );
}

export default Contact;
