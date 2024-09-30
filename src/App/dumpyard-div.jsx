import React, { Component, useState } from "react";
import "../Css/dumpyarddiv.css";
import "../Css/design-process.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import icons from "../Assets/second_section.svg";

class DumpardDiv extends Component {
  render() {
    return (
      <div>
        <div className="second-sec">
          <div className="intentions-head">
            <h1>
              Build the World <br />
              with <span>Intentions</span>
            </h1>
            <span className="aim">Aim ✱ Beliefs</span>
          </div>
          <div className="intentions-para">
            <img src={icons} />
            <p>
              Driven by vision and intention, I focus on purposeful design
              choices that amplify clarity. Each project tells a story of
              contrast, evolution, and the connection between product and human
              experience.
              <br />
              <br />I am a firm believer that design is more than just
              aesthetics. It's about solving problems that others don't have;
              it's about creating something durable and functional. This makes
              the difference between good and best-in-class products.
            </p>
          </div>
        </div>
        <div className="custom-border"></div>
        <div className="numbers">
          <div className="number 1" style={{width:"50%"}}>
            <span>4.5+</span>
            <br />
            <p>years of Total Experience</p>
          </div>
          <div className="number 2">
            <span>30+</span> <br />
            <p>Completed Projects</p>
          </div>
          <div className="number 3">
            <span>13</span>
            <br />
            <p>Satisfied Client</p>
          </div>
          <div className="number 4" style={{width:"50%"}}>
            <span>0</span>
            <br />
            <p>Days without a creative crisis</p>
          </div>
        </div>
      </div>
    );
  }
}

export default DumpardDiv;
