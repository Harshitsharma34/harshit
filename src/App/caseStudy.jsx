import React, { useEffect, useState } from "react";
import Prismic from "@prismicio/client";
import { useLocation } from "react-router-dom";
import backToTop from "../Assets/backToTop.svg";
import "../Css/work.css";
import Contact from "./contact";
import Footer from "./footer";
import Logo from "../Assets/logo.json";
import Lottie from "lottie-react";
import Loading from "../Assets/loading.json";
import { Link } from "react-router-dom";
import "../Css/caseStudy.css";

export default function CaseStudy() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };
  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  const [isLoading, setIsLoading] = useState(false);

  const apiEndpoint = "https://harshitsharma.prismic.io/api/v2";
  const accessToken =
    "MC5ZYUVtbXhNQUFETUFuODZN.77-977-9Ye-_ve-_vX8o77-977-977-977-977-9a--_ve-_ve-_ve-_ve-_ve-_vQITBF5h77-977-977-977-977-977-9TO-_vQ";

  const client = Prismic.client(apiEndpoint, { accessToken });
  const [caseStudy, setCaseStudy] = useState([]);

  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
    const n = location.pathname.lastIndexOf("/");
    const result = location.pathname.substring(n + 1);
    getCaseStudyData(result);
    setIsLoading(true);
  }, []);

  const getCaseStudyData = async (event) => {
    console.log("event", event);
    const response = await client.getByUID("case_study", event);
    if (response) {
      setCaseStudy(response.data);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <div className="case-study-parent">
        <div className="nav">
          <div className="navbar-container">
            <div className="logo">
              <Lottie animationData={Logo} loop={true} />
              {/* <img className="logo" src={image} alt="My Happy SVG" /> */}
            </div>
            <Link className="backtohome" to="/">
              Back to 🏠{" "}
            </Link>
          </div>
        </div>
        <div className="case-study-child">
          <h2 className="case-study-heading">{caseStudy.title}</h2>
          <div className="case-study-tags">
            <div className="tags-cs">
              {caseStudy.tags?.map((e, index) => (
                <button className={`tag tag-${index}`}>{e.tag}</button>
              ))}
            </div>
          </div>
          <div className="date-launch">
            <p className="date">
              Date: <p> {caseStudy?.date}</p>
            </p>
            <a href={caseStudy?.launch} target="_blank">
              Launch Project →
            </a>
          </div>
          <div className="case-study-main">
            {caseStudy.tiles?.map((e) => (
              <div className={`case-study ${e.container_size}`}>
                {e.content_type == "Image" ? (
                  <>
                    {isLoading ? (
                      <Lottie animationData={Loading} loop={true} />
                    ) : (
                      <>
                        <img className="img-fluid" src={e.image_link} />
                      </>
                    )}
                  </>
                ) : e.content_type == "Text" ? (
                  <div className="description-CS">
                    <div className="case-study-text">{e.text_content}</div>
                  </div>
                ) : e.content_type == "Heading" ? (
                  <div className="description-CS">
                    <h1>{e.heading}</h1>
                    <p className="case-study-text">{e.text_content}</p>
                  </div>
                ) : (
                  <video
                    className="img-fluid"
                    src={e.video_link}
                    autoPlay="autoplay"
                    loop="loop"
                  ></video>
                )}
              </div>
            ))}
          </div>
          <div className="thank-you-div">
            <h2 className="thank-you">Thank you for Reading</h2>
          </div>
        </div>
      </div>
      <img src={backToTop} className="scrollTop" onClick={scrollTop} style={{height: 60, display: showScroll ? 'flex' : 'none'}}/>
      <div className="footer-ng">
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
