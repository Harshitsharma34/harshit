import React from "react";
import Lottie from "lottie-react";
import animationData from '../Assets/data.json'

const style = {
  width : "100vw",
  height: "auto",
  marginBottom : "-30px",
  overflow: "hidden"
};

const interactivity = {
  mode: "scroll",
  actions: [
    {
      visibility: [0.35, 0.35],
      type: "stop",
      frames: [20,35],
    },
    {
      visibility: [0.35, 0.55],
      type: "seek",
      frames: [0, 55],
    },
    {
      visibility: [0.55, 1.0],
      type: "seek",
      frames: [55, 60],
    },
  ],
};

function Magic() {
  return (
    <div className="scroll-magic">
      <Lottie
      class="magic"
        animationData={animationData}
        style={style}
        interactivity={interactivity}
      />
    </div>
  );
}
export default Magic;
