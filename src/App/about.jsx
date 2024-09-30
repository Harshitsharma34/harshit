import React, { useEffect, useRef, useState } from "react";
import "../Css/about.css";
import "../Css/dumpyard.css";
import Nav from "./Navigation";
import Pattern from "../Assets/pattern.svg";
import Pattern2 from "../Assets/pattern2.svg";
import Contact from "./contact";
import Footer from "./footer";
import "../Css/Nav.css";
import me from "../Assets/about.svg";
import ux from "../Assets/SVG/ab_ux.svg";
import product from "../Assets/SVG/ab_product.svg";
import strategy from "../Assets/SVG/ab_strategy.svg";
import research from "../Assets/SVG/ab_research.svg";
import Marquee from "react-fast-marquee";
import { Menu, MenuItem } from "@szhsin/react-menu";
import { Link } from "react-router-dom";
import { Link as Link2 } from "react-scroll";
import menu from "../Assets/Menu.svg";
import img1 from "../Assets/img1.png";
import img2 from "../Assets/img2.png";
import img3 from "../Assets/img3.png";
import img4 from "../Assets/img4.png";
import img5 from "../Assets/img5.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lottie from "lottie-react";
import expertise from "../Assets/Comp.json";

function About() {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);
  const [align, setAlign] = useState("end");
  const [position, setPosition] = useState("end");
  const [viewScroll, setViewScroll] = useState("close");

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };
  var settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    pauseOnHover: false,
    cssEase: "linear",
  };

  const sectionRef = useRef(null);
  const lottieRef = useRef(null); // Ref for controlling Lottie animation
  const [animationStarted, setAnimationStarted] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [scrollUnlocked, setScrollUnlocked] = useState(false);

  // Function to reset states when scrolling out of section
  const resetAnimationStates = () => {
    setAnimationStarted(false);
    setAnimationCompleted(false);
    setScrollUnlocked(false);
  };

  useEffect(() => {
    let scrollTimeout; // Variable to prevent rapid state changes

    const handleScroll = () => {
      const section = sectionRef.current;
      if (section) {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Reset states if section is out of view (scrolls out of viewport)
        if (rect.top > windowHeight || rect.bottom < 0) {
          resetAnimationStates();
        }

        // If the section is visible, trigger the animation
        if (
          rect.top <= windowHeight &&
          rect.bottom >= 0 &&
          !animationCompleted
        ) {
          // Start the animation after 1 second delay
          if (!animationStarted) {
            scrollTimeout = setTimeout(() => setAnimationStarted(true), 200);
          }

          if (animationStarted && lottieRef.current) {
            const scrollRange = windowHeight * 2; // Adjust scroll range for animation
            const progress = Math.min(
              Math.max((windowHeight - rect.top) / scrollRange, 0),
              1
            );
            const totalFrames = lottieRef.current.getDuration(true);
            lottieRef.current.goToAndStop(progress * totalFrames, true);

            // Mark animation as completed when progress reaches 100%
            if (progress === 1) {
              setAnimationCompleted(true);

              // Pause for 2 seconds before allowing scrolling
              setTimeout(() => {
                setScrollUnlocked(true);
              }, 200);
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout); // Cleanup timeout to prevent memory leaks
    };
  }, [animationStarted, animationCompleted]);

  return (
    <div className="about-page">
      <span className="about-bg"></span>
      <Nav />

      <div className="about-span">
        <div className="header-para-about">
          <div className="text-header-about">
            <h1>Helping brands thrive</h1>
            <h1 style={{ textDecoration: "none", color: "#0057FF" }}>
              in the digital world
            </h1>
            <img src={Pattern} className="pattern" />
            <img src={Pattern2} className="pattern2" />
          </div>

          <div className="ng-about2">
            <span className="circle4"></span>
            <span className="circle5"></span>
          </div>
        </div>
      </div>
      <div className="about-me">
        <img src={me} />
        <div>
          <div className="tags-cs">
            <button className={`tag`}>Designing Since 2019</button>
            <button className={`tag`}>4.5 Years Exp</button>
            <button className={`tag`}>Resume ↗</button>
          </div>
          <h2>
            “I always used to think that my ideas weren’t good enough, but then
            I realized that if I don’t try it, I have no clue how it will turn
            out. If an idea or a concept doesn’t come alive like I imagined,
            it’s not the end of the world.”
          </h2>
          <p>
            I'm Harshit, skilled as a multidisciplinary designer. Like every
            other Engineer, I'm not doing what I am supposed to do. I love
            exploring new design trends and am often amazed by the progress we
            as a human species have made so far in recent years (apart from the
            headphone-jack part!!).
          </p>
          <p>
            I'm Harshit, skilled as a multidisciplinary designer. Like every
            other Engineer, I'm not doing what I am supposed to do. I love
            exploring new design trends and am often amazed by the progress we
            as a human species have made so far in recent years (apart from the
            headphone-jack part!!).
          </p>
        </div>
      </div>
      <div className="expertise" ref={sectionRef}>
        <div
          className={`sticky-container ${animationCompleted ? "release" : ""}`}
        >
          <div className="forte-text">
            <h2>MY FORTÈ</h2>
            <p>
              “I always used to think that my ideas weren’t good enough, but
              then I realized that if I don’t try it, I have no clue how it will
              turn out. If an idea or a concept doesn’t come alive like I
              imagined, it’s not the end of the world.”
            </p>
          </div>
          <div className="ng-about2">
            <span className="circle4"></span>
            <span className="circle5"></span>
          </div>
          <div className="ng-about2">
            <span className="circle4"></span>
            <span className="circle5"></span>
          </div>
          {/* Lottie Animation */}
          <div className="lottie-container">
            <Lottie
              animationData={expertise}
              lottieRef={lottieRef}
              autoplay={false} // Disable autoplay
              loop={false} // Disable looping
              style={{ width: "800px", height: "800px" }}
            />
          </div>
        </div>
      </div>
      <div className="peace_of_mind">
        <Marquee>
          <img
            src={img1}
            pauseOnHover={true}
            style={{ paddingRight: "40px" }}
          />
          <img
            src={img2}
            pauseOnHover={false}
            style={{ paddingRight: "40px" }}
          />
          <img
            src={img3}
            pauseOnHover={false}
            style={{ paddingRight: "40px" }}
          />
          <img
            src={img4}
            pauseOnHover={false}
            style={{ paddingRight: "40px" }}
          />
          <img
            src={img5}
            pauseOnHover={false}
            style={{ paddingRight: "40px" }}
          />
        </Marquee>

        <h1>Peace of Mind</h1>
        <p>
          A person who loves nature, music, exercise, sports, and general
          well-being. I do my best to live the most balanced life possible. Life
          is a gift that we must not take for granted. Nothing is more important
          to me than the peace of mind of my loved ones and the being in the
          best mental and physical shape possible.
        </p>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
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
          <Link to="/work" style={{ textDecoration: "none", color: "White" }}>
            WORK
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/about" style={{ textDecoration: "none", color: "White" }}>
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

export default About;
