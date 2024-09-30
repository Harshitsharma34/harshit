import React, { useEffect, useState } from "react";
import Prismic from "@prismicio/client";
import { useLocation } from "react-router-dom";
import backToTop from "../Assets/backToTop.svg";
import "../Css/work.css";

import "../Css/caseStudy.css";
import Nav from "./Navigation";
import "../Css/about.css"; // Import the separate CSS file
import CaseStudy from "./caseStudyTest";

export default function CaseStudyPage() {
  const [showScroll, setShowScroll] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

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

  const [isLoading, setIsLoading] = useState(false);

  const apiEndpoint = "https://harshitsharma.prismic.io/api/v2";
  const accessToken =
    "MC5ZYUVtbXhNQUFETUFuODZN.77-977-9Ye-_ve-_vX8o77-977-977-977-977-9a--_ve-_ve-_ve-_ve-_ve-_vQITBF5h77-977-977-977-977-977-9TO-_vQ";

  const client = Prismic.client(apiEndpoint, { accessToken });
  const [caseStudy, setCaseStudy] = useState([]);
  const [isProtected, setIsProtected] = useState(false);
  const [doc, setDoc] = useState([]);

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
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const [navOpacity, setnavOpactity] = useState("0");

  const [align, setAlign] = useState("end");
  const [position, setPosition] = useState("end");
  const [viewScroll, setViewScroll] = useState("close");

  const [isFooterVisible, setFooterVisible] = useState(false);

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#1F1F34") : setnavColor("transparent");
    // window.scrollY > 10 ? setnavSize("1.5rem") : setnavSize("1.5rem");
    window.scrollY > 10 ? setnavOpactity("1") : setnavOpactity("0");
  };
  useEffect(() => {
    const sections = document.querySelectorAll(".case-study");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Set active section when intersecting
          }
        });
      },
      { threshold: 0.5 } // 50% of section must be visible to mark it active
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
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

  // useEffect(() => {
  //   const footer = document.getElementById("contact");
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       setFooterVisible(entry.isIntersecting);
  //     },
  //     { root: null, threshold: 0.1 } // 0.1 threshold means 10% of the footer needs to be visible
  //   );

  //   if (footer) {
  //     observer.observe(footer); // Start observing the footer
  //   }

  //   const handleScroll = () => {
  //     const footerTop = footer.getBoundingClientRect().top;
  //     const viewportHeight = window.innerHeight;

  //     // Check if the footer is about to come into view
  //     if (footerTop <= viewportHeight) {
  //       setFooterVisible(true); // Footer is in view, allow the menu to scroll up
  //     } else {
  //       setFooterVisible(false); // Footer is out of view, make the menu sticky
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <Nav />
      <CaseStudy />
      
    
    </>
  );
}
