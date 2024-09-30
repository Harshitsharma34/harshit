import React, { useEffect, useState } from "react";
import Prismic from "@prismicio/client";
import { useLocation } from "react-router-dom";
import backToTop from "../Assets/backToTop.svg";
import "../Css/work.css";
import line from "../Assets/grad_line.svg";
import Lottie from "lottie-react";
import Loading from "../Assets/loading.json";
import { Link } from "react-router-dom";
import "../Css/caseStudy.css";
import arrow from "../Assets/arrow23.svg";
import NDA from "../Assets/NDA.json";
import { Menu, MenuItem } from "@szhsin/react-menu";
import Nav from "./Navigation";
import { Link as Link2 } from "react-scroll";
import menu from "../Assets/Menu.svg";
import Contact from "./contact";
import Footer from "./footer";
import "../Css/about.css"; // Import the separate CSS file

export default function CaseStudy() {
  const [showScroll, setShowScroll] = useState(false);
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const [navOpacity, setnavOpactity] = useState("0");

  const [align, setAlign] = useState("end");
  const [position, setPosition] = useState("end");
  const [viewScroll, setViewScroll] = useState("close");

  const [isFooterVisible, setFooterVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(null); // Track the active section

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  const [isLoading, setIsLoading] = useState(true);

  const apiEndpoint = "https://harshitsharma.prismic.io/api/v2";
  const accessToken =
    "MC5ZYUVtbXhNQUFETUFuODZN.77-977-9Ye-_ve-_vX8o77-977-977-977-977-9a--_ve-_ve-_ve-_ve-_ve-_vQITBF5h77-977-977-977-977-977-9TO-_vQ";

  const client = Prismic.client(apiEndpoint, { accessToken });
  const [caseStudy, setCaseStudy] = useState([]);
  const [isProtected, setIsProtected] = useState(false);
  const [doc, setDoc] = useState([]);

  const location = useLocation();
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);

    const n = location.pathname.lastIndexOf("/");
    const result = location.pathname.substring(n + 1);
    getCaseStudyData(result);
    setIsLoading(true);
  }, [location.pathname]);

  const getCaseStudyData = async (event) => {
    console.log("event", event);
    const response = await client.getByUID("case_study", event);
    if (response) {
      setCaseStudy(response.data);
      setIsProtected(!response.data.locked);
      console.log("case study", response.data);
    }
    setIsLoading(false);
  };

  const login = (params) => (event) => {
    let user_password = caseStudy.password;

    if (user_password == event.target[0].value) {
      setIsProtected(true);
    }
    event.preventDefault();
  };
  useEffect(() => {
    fetchData();
  }, []);
  //case Study

  //work
  const fetchData = async () => {
    const response = await client.query(
      Prismic.Predicates.at("document.type", "worklist"),
      { orderings: "[my.worklist.order desc]" }
    );
    if (response) {
      setDoc(response.results);
    }
  };

  //nav

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#1F1F34") : setnavColor("transparent");
    // window.scrollY > 10 ? setnavSize("1.5rem") : setnavSize("1.5rem");
    window.scrollY > 10 ? setnavOpactity("1") : setnavOpactity("0");
  };

  useEffect(() => {
    if (!isLoading && caseStudy.tiles && caseStudy.tiles.length > 0) {
      const sections = document.querySelectorAll(".case-study");

      if (sections.length === 0) {
        console.error("No sections found for observation.");
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const sectionId = entry.target.id;
            const sectionData = caseStudy.tiles?.find(
              (tile, index) => `section-${index}` === sectionId
            );

            // Only activate sections that have a heading
            if (entry.isIntersecting && sectionData?.heading) {
              setActiveSection(entry.target.id); // Set active section when it becomes visible
            }
          });
        },
        {
          root: null,
          threshold: [0.1, 0.8], // Adjust threshold: 10% and 80% visibility
        }
      );

      sections.forEach((section) => observer.observe(section));

      return () => {
        sections.forEach((section) => observer.unobserve(section));
      };
    }
  }, [isLoading, caseStudy.tiles]);

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  const scrollToSection = (index) => {
    const section = document.getElementById(`section-${index}`);
    if (section) {
      const offset = window.innerHeight / 4 - section.offsetHeight / 2; // Calculate offset for middle positioning
      const sectionTop =
        section.getBoundingClientRect().top + window.pageYOffset; // Get the section's current position

      window.scrollTo({
        top: sectionTop - offset, // Scroll with calculated offset
        behavior: "smooth", // Smooth scroll
      });
    }
  };

  return (
    <>
      <div className="caseStudy-container">
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

        {isProtected ? (
          <>
            <div className={`menu-test ${isFooterVisible ? "unfixed" : ""}`}>
              <p>Menu</p>
              <ul>
                {caseStudy.tiles?.map((tile, index) => (
                  <li key={`menu-item-${index}`}>
                    <a
                      href="#"
                      className={`menu-link ${
                        activeSection === `section-${index}` ? "active" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        scrollToSection(index); // Call your scrollToSection function
                      }}
                    >
                      {tile.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="case-study-main">
              <div className="ng-content-cs">
                <div className="nd-content">
                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      marginBottom: "20px",
                      alignItems: "center",
                    }}
                  >
                    <div className="projectLogo">
                      <img src={caseStudy.logo} />
                    </div>
                    <h2 className="case-study-heading">{caseStudy.title}</h2>
                  </div>

                  <p className="case-study-desc">{caseStudy.description}</p>
                </div>

                <div className="date-launch">
                  <p className="date">
                    Role: <p> Product Designer</p>
                  </p>
                  {caseStudy.teams?.map((e) => (
                    <a className="team" href={e?.link} target="_blank">
                      Team: <p> {e?.team_name}</p>
                    </a>
                  ))}
                  <p className="date">
                    Duration: <p> {caseStudy?.date}</p>
                  </p>
                </div>
              </div>
              <div className={"case-study full"}>
                <img className="img-fluid" src={caseStudy.header_image} />
              </div>
              {caseStudy?.tagss ? (
                <div className="description-tags">
                  <h1>Role and Contributions</h1>
                  <div className="case-study-tags">
                    <div className="tags-cs">
                      {caseStudy.tags?.map((e) => (
                        <button className={`tag`}>{e.tag}</button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="case-study-tags"></div>
              )}
              {caseStudy.tiles?.map((e, index) => (
                <section
                  key={index}
                  id={`section-${index}`}
                  className={`case-study ${e.container_size}`}
                >
                  {e.content_type == "Image" ? (
                    <>
                      {isLoading ? (
                        <Lottie animationData={Loading} loop={true} />
                      ) : (
                        <div className="image-div">
                          <img className="img-fluid" src={e.image_link} />
                          <p className="image-description">{e.image_desc}</p>
                        </div>
                      )}
                    </>
                  ) : e.content_type == "Text" ? (
                    <div className="Text-CS">
                      <div className="case-study-ng">
                        <div className="case-study-text">{e.text_content}</div>
                      </div>
                    </div>
                  ) : e.content_type == "Heading-text" ? (
                    <div className="description-CS">
                      <h1>{e.heading}</h1>
                      <div className="case-study-ng">
                        <p className="case-study-text">{e.text_content}</p>
                      </div>
                    </div>
                  ) : e.content_type == "Heading-green" ? (
                    <div className="description-CS">
                      <h1>{e.heading}</h1>
                      <div className="case-study-ng">
                        <p className="case-study-text green">
                          {e.heading_green}
                        </p>

                        <p className="case-study-text">{e.text_content}</p>
                      </div>
                    </div>
                  ) : e.content_type == "Heading-desc" ? (
                    <div className="description-CS">
                      <h1>{e.heading}</h1>
                      <div className="case-study-ng">
                        <p className="case-study-text green">
                          {e.heading_green}
                        </p>

                        <p className="case-study-text">{e.text_content}</p>
                      </div>
                    </div>
                  ) : e.content_type == "Divide" ? (
                    <div className="break">
                      <hr
                        className="solid"
                        style={{
                          opacity: 0.2,
                          backgroundColor: "#272746",
                        }}
                      />
                    </div>
                  ) : e.content_type == "Quotation" ? (
                    <div className="description-CS">
                      <h1>{e.heading}</h1>
                      <div className="case-study-q">
                        <p className="case-study-quoation">{e.quotation}</p>
                      </div>
                    </div>
                  ) : e.content_type == "Code" ? (
                    <div className="code"></div>
                  ) : (
                    <video
                      className="img-fluid"
                      src={e.video_link}
                      autoPlay="autoplay"
                      loop="loop"
                    ></video>
                  )}
                </section>
              ))}
            </div>
          </>
        ) : (
          <div className="nda-div">
            <span className="circle3"></span>
            <span className="grad-overlay-sm-mw">
              <Lottie className="nda-2" animationData={NDA} loop={true} />
              <h2 className="heading-nda">{caseStudy.title}</h2>
              <form className="form-signin" onSubmit={login()}>
                <div className="key-div">
                  <p className="text-nda-1">This content is protected!</p>
                  <p className="text-nda-2">Enter the password to view </p>
                  <input
                    className="password-input"
                    type="password"
                    placeholder="May the password be with you."
                    required
                  ></input>
                  <input
                    className="arrow"
                    type="image"
                    alt="submit"
                    src={arrow}
                    width={40}
                  ></input>
                </div>
              </form>
            </span>
          </div>
        )}

        <img
          src={backToTop}
          className="scrollTop"
          onClick={scrollTop}
          style={{ height: 60, display: showScroll ? "flex" : "none" }}
        />
      </div>
      {isProtected ? (
        <div>
          {" "}
          <div>
            <div className="thank-you-div">
              <img src={line} />
              <h1>Thank You for Reading</h1>
              <img src={line} style={{ rotate: "180deg" }} />
            </div>
            <div className="bg-grad">
              <img src="https://ik.imagekit.io/harshitsharma/Feedo/cs_bg_XOWFx0-oc.svg?updatedAt=1727536052664" />
            </div>
          </div>
          <section id="contact">
            <Contact />
            <Footer />
          </section>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}