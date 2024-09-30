import "../Css/header.css";
import { Fade } from "react-awesome-reveal";
import HeaderImage from "../Assets/h_pattern.svg";
import Arrow from "../Assets/AFW.svg";
import Scroll from "../Assets/scroll.svg";

function Header() {
  return (
    <div className="hero">
      <div className="header-para">
        <div className="text-header">
          {/* <h1>Hey There!</h1> */}
          <Fade  delay={1e2} cascade damping={0.3} triggerOnce={false}>
            <h1>Lead Product Designer based in India</h1>
          </Fade>
        </div>
        <div className="Text2">
          <a href="mailto:harshitsharma34@gmail.com">
            <img
              className="AWF"
              style={{ color: "white", height: "auto", width: "200px" }}
              src={Arrow}
            />
          </a>
          <Fade  delay={1e2} cascade damping={0.3} triggerOnce={false}>
          <p>
            Yo, I'm <span>Harshit Sharma</span>, married to digital design and... helping
            digital founders create unique, empathic product experiences
          </p>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Header;
