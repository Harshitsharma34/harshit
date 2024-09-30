import React, { useEffect, useState } from "react";
import "../App.css";
import Nav from "./Navigation";
import Header from "./Header2";
import DumpardDiv from "./dumpyard-div";
import Contact from "./contact";
import Work from "./MainWork";
import OtherWork from "./OtherWork";
import Footer from "./footer";
import { Fade } from "react-awesome-reveal";
import Magic from "./magic";
import lenskart from "../Assets/lenskart.png";
import promo from "../Assets/promo.png";
import woo from "../Assets/woo.png";
import lp from "../Assets/lp.png";
import hcode from "../Assets/hcode.png";
import ReactToolTip from "./tooltip";
import { Menu, MenuItem } from "@szhsin/react-menu";
import HeaderImage from "../Assets/h_pattern.svg";
import { Link } from "react-router-dom";
import { Link as Link2 } from "react-scroll";
import menu from "../Assets/Menu.svg";

function Main() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const [align, setAlign] = useState("end");
  const [position, setPosition] = useState("end");
  const [viewScroll, setViewScroll] = useState("close");

  window.addEventListener("scroll", checkScrollTop);

  return (
    <div className="App">
      <Nav />
      <span className="circle1"></span>
      <span className="circle2"></span>
      <img className="header-image" src={HeaderImage} />
      <Header />
      <section id="dumpyard" style={{backgroundImage :"linear-gradient(0deg, rgb(0 87 255 / 13%), rgb(0 87 255 / 0%));"}}>
        <DumpardDiv />
      </section>

      <Work />
      <OtherWork />
     

      {/* <Expertise /> */}

      <Magic />
      <Fade delay={20} duration={600} triggerOnce>
        <section id="contact">
          <Contact />
    
        </section>
      </Fade>
      <Menu
        menuButton={<img className="menu" src={menu} />}
        key="top"
        direction="top"
        align={align}
        position={position}
        viewScroll={viewScroll}
        gap={12}
        transition
      >
        <MenuItem>
          <Link to="/" style={{ textDecoration: "none", color: "White" }}>
            HOME
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/work" style={{ textDecoration: "none", color: "White" }}>
            WORK
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to="/about"
            target="_blank"
            style={{ textDecoration: "none", color: "White" }}
          >
            ABOUT ME
          </Link>
        </MenuItem>
        <MenuItem>
          <Link2
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            style={{ textDecoration: "none", color: "White" }}
          >
            LET'S CONNECT
          </Link2>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Main;
