import React, { useState, useEffect } from "react";
import "../Css/about.css";

function About2() {
  const sections = [
    {
      text: "I'm Harshit, skilled as a multidisciplinary designer...",
      image: "https://via.placeholder.com/400x300?text=Image1",
    },
    {
      text: "I love exploring new design trends...",
      image: "https://via.placeholder.com/400x300?text=Image2",
    },
    {
      text: "Amazed by the progress we as a human species have made...",
      image: "https://via.placeholder.com/400x300?text=Image3",
    },
  ];

  const [currentSection, setCurrentSection] = useState(0);

  const handleScroll = () => {
    const sectionHeight = window.innerHeight;
    const scrollPosition = window.scrollY + window.innerHeight / 2; // Middle of the viewport
    const newSectionIndex = Math.floor(scrollPosition / sectionHeight);

    if (newSectionIndex !== currentSection && newSectionIndex < sections.length) {
      setCurrentSection(newSectionIndex);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentSection]);

  return (
    <div className="scrolly-container">
      <div className="text-section">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`text-item ${
              currentSection === index ? "active" : ""
            }`}
          >
            <p>{section.text}</p>
          </div>
        ))}
      </div>
      <div className="image-section">
        {sections.map((section, index) => (
          <img
            key={index}
            src={section.image}
            alt="Section"
            className={`scrolly-image ${
              currentSection === index ? "active" : ""
            }`}
          />
        ))}
      </div>
      <div className="exp1">
          <img src={tech} className="exp" />
          <h1>Technology</h1>
          <p>
            With a solid foundation in technology, I have honed my skills in
            Python, ReactJS, and JavaScript, equipping me with a versatile
            toolkit to tackle complex challenges and how to handle API calls.
          </p>
        </div>
        <div className="exp1">
          <img src={des} className="exp" />
          <h1>Design</h1>
          <p>
            Design has been a integral part throughout my career. From associate
            to leading a product i have done it all. My affection towards
            innovation and new idea drive the designer in me.
          </p>
        </div>
        <div className="exp1">
          <img src={pro} className="exp" />
          <h1>Product</h1>
          <p>
            I have gained valuable experience in driving successful product
            strategies, overseeing the entire product lifecycle, and
            collaborating with cross-functional teams. My expertise lies in
            identifying market opportunities, defining product wireframes, and
            feature management.
          </p>
        </div>
    </div>
  );
}

export default About2;