import "../Css/header.css";
import scroll from "../Assets/scroll.svg";
import hithere from "../Assets/hithere.svg";
import memoji from "../Assets/memoji.png";

function Header() {
  return (
    <div className="hero">
      <div>
        <ul className="header-text">
          <img className="hi-img-2" src={memoji}></img>
          <li>
            <h1
              id="making"
              style={{
                WebkitTextStrokeWidth: "1px",
                WebkitTextFillColor: "transparent",
              }}
            >
              MAKING
            </h1>
          </li>

          <div className="product-design-hover">
            <li>
              <h1 id="product">PRODUCT</h1>
            </li>
            <li>
              <h1 id="design">DESIGN</h1>
            </li>
            <div className="hover-header">
            <img className="memoji" src={memoji}></img>
              <img className="hi-img" src={hithere}></img>
            </div>
          </div>

          <li>
            <h1
              id="simple"
              style={{
                WebkitTextStrokeWidth: "1px",
                WebkitTextFillColor: "transparent",
              }}
            >
              SIMPLE
            </h1>
          </li>
        </ul>

        <img className="scroll-img" src={scroll}></img>
      </div>
    </div>
  );
}

export default Header;
