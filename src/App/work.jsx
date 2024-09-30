import React, { useEffect, useState } from "react";
import "../Css/about.css";
import "../Css/dumpyard.css";
import Contact from "./contact";
import Footer from "./footer";
import Nav from "./Navigation";
import "../Css/Nav.css";
import Prismic from "@prismicio/client";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
//scrollytelling
import NDA from "../Assets/NDA.json";
import New from "../Assets/new.json";
import { Link as Link2 } from "react-scroll";
import menu from "../Assets/Menu.svg";

import OtherWork from "./OtherWork";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Menu, MenuItem } from "@szhsin/react-menu";


function About() {
  const apiEndpoint = "https://harshitsharma.prismic.io/api/v2";
  const accessToken =
    "MC5ZYUVtbXhNQUFETUFuODZN.77-977-9Ye-_ve-_vX8o77-977-977-977-977-9a--_ve-_ve-_ve-_ve-_ve-_vQITBF5h77-977-977-977-977-977-9TO-_vQ";
  // This is where you would add your access token for a Private repository
  const Client = Prismic.client(apiEndpoint, { accessToken });
  const [doc, setDoc] = useState([]);
  const [align, setAlign] = useState("end");
  const [position, setPosition] = useState("end");
  const [viewScroll, setViewScroll] = useState("close");
  useEffect(() => {
    fetchData();
  }, []);
  //case Study

  const fetchData = async () => {
    const response = await Client.query(
      Prismic.Predicates.at("document.type", "worklist"),
      { orderings: "[my.worklist.order desc]" }
    );
    if (response) {
      setDoc(response.results);
    }
  };

  return (
    <div className="about-page">
      <span className="about-span"></span>
      <Nav />
      <div>
        <div className="header-para-work">
          <div className="text-header-work">
            <h1>Recent Work</h1>
          </div>
          <div className="work-container">
            <div className="work-div1">
              <h1>Case Studies with Results</h1>
              <p>
                Below projects showcase my EDPIT design process, iterations,
                final product, including results & achievements.
              </p>
            </div>
            {doc?.map((e) => (
              <div className="work-div">
                {e?.data.new ? (
                  <Lottie className="nda" animationData={New} loop={true} />
                ) : (
                  <Lottie
                    className="nda"
                    animationData={NDA}
                    loop={true}
                    style={{ display: "none" }}
                  />
                )}
                {e?.data.nda ? (
                  <Lottie className="nda" animationData={NDA} loop={true} />
                ) : (
                  <Lottie
                    className="nda"
                    animationData={NDA}
                    loop={true}
                    style={{ display: "none" }}
                  />
                )}
                {e?.data.nda ? (
                  <Link to={``}>
                    <div className="work-image">
                      <div className="work-image">
                        <span className="overlay"></span>
                        <img
                          className="thumbnail"
                          src={e?.data.images[0].image_link}
                        ></img>
                        <h1 className="work-title">{e?.data.title}</h1>
                      </div>
                      <div className="desc-div">
                        <p style={{ color: "white" }}>
                          {e?.data.long_description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <Link to={`/case-study/${e?.data.content_relationship.uid}`}>
                    <div className="work-image">
                      <div className="work-image">
                        <span className="overlay"></span>
                        <img
                          className="thumbnail"
                          src={e?.data.images[0].image_link}
                        ></img>
                        <h1 className="work-title">{e?.data.title}</h1>
                      </div>
                      <div className="desc-div">
                        <p style={{ color: "white" }}>
                          {e?.data.long_description}
                        </p>
                        <p>→</p>
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            ))}
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br /> <br /> <br />
          <OtherWork />
          <section id="contact">
            <Contact />
            <Footer />
          </section>
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
              <Link
                to="/work"
                style={{ textDecoration: "none", color: "White" }}
              >
                WORK
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to="/about"
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
      </div>
    </div>
  );
}

export default About;
