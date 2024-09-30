import React, { useState } from "react";
import "../Css/contact.css";
import copy from "copy-to-clipboard";
import lenskart from "../Assets/lenskart.svg";
import fmo from "../Assets/fmo.svg";
import optty from "../Assets/optty.svg";
import ipay from "../Assets/ipay.svg";
import hcode from "../Assets/hcode.png";
import bg from "../Assets/bg_company.svg";
import animation from "../Assets/footer_animation.svg";

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
    allStatements = <div className="success-copy">Copied!</div>;
  } else {
    allStatements = <div className="success-copy">Copy</div>;
  }

  return (
    <div
      style={{
        position: "relative",
        backgroundImage:
          "linear-gradient(180deg, #0055ff00 0%, #0055ff2a 130%)",
      }}
    >
      <img className="footer-animation" src={animation} />
      <div className="footer-main">
        <div className="container-div2">
          <img className="bg" src={bg} />
          <h1>
            Proud to deliver <span style={{ color: "#6899F9" }}>results</span>{" "}
            for
          </h1>
          <div className="company-images">
            <img src={fmo} className="company img4" />
            <img src={optty} className="company img2" />

            <img src={lenskart} className="company img1" />

            <img src={ipay} className="company img3" />

            <img src={hcode} className="company img5" />
          </div>
        </div>
        <div className="contact-div">
          <p className="talk">Have Something in Mind?</p>
          <div className="get-in-touch">
            <h2>
              <a href="mailto:harshitsharma34@gmail.com">Let's Talk!</a>
            </h2>
            <div
              className="mask"
              onClick={() => {
                copyToClipboard();
                showDiv();
              }}
            >
              <span className="email-call">
                <h1>harshitsharma34@gmail.com</h1>
                <p
                  className="button call"
                  onClick={() => {
                    copyToClipboard();
                    showDiv();
                  }}
                >
                  {allStatements}
                </p>

                <h1> or </h1>
                <p className="button copy">Book a Call</p>
              </span>
            </div>

          </div>
          <ul>
            <li>
              <a href="https://harshits.medium.com/" target="_blank">
                Medium <span className="↗">↗</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/harshitsharma34/"
                target="_blank"
              >
                LinkedIn <span className="↗">↗</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/harshit.shaxma/"
                target="_blank"
              >
                Instagram <span className="↗">↗</span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/bruisedwaynne" target="_blank">
                Twitter <span className="↗">↗</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="footer">
            <div className="footer-left">
              <p>
                I Designed and Coded this website from scratch © Harshit Sharma.{" "}
              </p>
              <p>Made over a Cup of ☕ and alot of sleepless 🌛 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
