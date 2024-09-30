
import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Lottie from "lottie-react";
import Logo from "../Assets/logo.json";
import "../Css/Nav.css";

function Nav() {
  

  return (
    <div className="nav">
      <div className="navbar-container">
        <div
          className="logo"

        >
         <Lottie animationData={Logo} loop= {true}/> 
          {/* <img className="logo" src={image} alt="My Happy SVG" /> */}
        </div>
        <ul className="nav-list">
          <li>
            <Link
              activeClass="active"
              to="dumpyard"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              <a
                className="dumpyard"
                style={{ textDecoration: "none", color: "white" }}
                href="#"
              >
                Dumpyard
              </a>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="work"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              <a
                className="work"
                style={{ textDecoration: "none", color: "white" }}
                href="#"
              >
                Work
              </a>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              <a
                className="about"
                style={{ textDecoration: "none", color: "white" }}
                href="#"
              >
                About
              </a>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              <a
                className="connect"
                style={{ textDecoration: "none", color: "white" }}
                href="#"
              >
                Let's Connect
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
