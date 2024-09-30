import React from "react";
import "../Css/about.css";
import exp1 from "../Assets/exp1.png";
import exp2 from "../Assets/exp2.png";
import exp3 from "../Assets/exp3.png";

export default function Expertise() {
  return (
    <div className="expertise">
      <h1>Expertise</h1>
      <p>Just getting gist of how things get done in real world.</p>
      <hr
        className="line"
        style={{
          opacity: 0.2,
        }}
      />
      <div className="exp-images">
        <img className="exp-1" src={exp1} />

        <img className="exp-2" src={exp2} />

        <img className="exp-3" src={exp3} />
      </div>
    </div>
  );
}
