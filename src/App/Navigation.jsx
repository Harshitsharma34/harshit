import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Lottie from "lottie-react";
import Logo from "../Assets/logo_harshit.svg";
import Text from "../Assets/text.svg";
import Text2 from "../Assets/text-nav2.svg";
import "../Css/Nav.css";



function Nav() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <div className={colorChange ? 'nav colorChange' : 'nav'}>
      <div className="navbar-container-nav">
        <ul className="nav-list">
          <a
            className="work"
            style={{ textDecoration: "none", color: "white" }}
            href="/"
          >
            <img className="logo" src={Logo} />
          </a>

          {/* <li>
            <a
              className="work"
              style={{ textDecoration: "none", color: "white" }}
              href="/work"
            >
              Work,
            </a>
          </li> */}
          <li></li>
          <li>
            <a
              className="about"
              style={{ textDecoration: "none", color: "white" }}
              href="/about"
            >
              About,
            </a>
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
              Contact
              </a>
            </Link>
          </li>
        </ul>
        <img className="text-nav" src={Text} />
        <img className="text-nav2" src={Text2} />
      </div>
      <div className="break-nav">
        <hr
          className="solid"
          style={{
            opacity: 1,
          }}
        />
      </div>
    </div>
  );
}

export default Nav;
