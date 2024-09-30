import "../Css/header.css";
import { Fade } from "react-awesome-reveal";
import { Carousel } from "react-responsive-carousel";

function Header() {
  return (
    <div className="hero">
      <div className="marquee-container">
        <div class="marquee">
          <p>
            <h1>
             
            ✹   
              <span
                style={{
                  WebkitTextStroke: "2px white",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {" "}Making
              </span>
              &nbsp; Product &nbsp; Design &nbsp;
              <span
                style={{
                  WebkitTextStroke: "2px white ",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Simple &nbsp;
              </span>
              ✹{" "} 
            </h1>
            <h1></h1>
          </p>
          <p>
            <h1>
           
              <span
                style={{
                  WebkitTextStroke: "2px white ",
                  WebkitTextFillColor: "transparent",
                }}
              >
                &nbsp;Making
              </span>
              &nbsp; Product &nbsp; Design &nbsp;
              <span
                style={{
                  WebkitTextStroke: "2px white ",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Simple &nbsp;
              </span>
            </h1>
          </p>
          <p>
            <h1>
             
            ✹{" "} 
              <span
                style={{
                  WebkitTextStroke: "2px white",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Making
              </span>
              &nbsp; Product &nbsp; Design &nbsp;
              <span
                style={{
                  WebkitTextStroke: "2px white ",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Simple &nbsp;
              </span>
              ✹{" "}
            </h1>
            <h1></h1>
          </p>
          <p>
            <h1>
           
              <span
                style={{
                  WebkitTextStroke: "2px white ",
                  WebkitTextFillColor: "transparent",
                }}
              >
                &nbsp;Making
              </span>
              &nbsp; Product &nbsp; Design &nbsp;
              <span
                style={{
                  WebkitTextStroke: "2px white ",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Simple &nbsp;
              </span>
            </h1>
          </p>
        </div>
       
      </div>

      <div className="header-para">
        <p>
          Hello There! I’m a{" "}
          <span style={{ color: "#ECFF7B" }}>Product Designer </span> based in
          India and currently working for{" "}
          <span style={{ color: "#ECFF7B" }}>Little Planet Design Studio </span>{" "}
          to create experiences that shape the future of web.
        </p>
      </div>
      <div className="dump-sec">
        <Carousel
          showArrows={true}
          autoPlay={0.5}
          infiniteLoop={true}
          showStatus={false}
          showIndicators={false}
          swipeable={true}
          showThumbs={false}
          stopOnHover={false}
        >
          <div className="dump-image-2">
            <h2 className="assembly">Assembly</h2>
            <img className="work-image-image" src={dump1} />
          </div>
          <div className="dump-image-2">
            <h2 className="assembly-2">Multi-Disciplinary</h2>
            <img className="work-image-image" src={dump2} />
          </div>
          <div className="dump-image-2">
            <h2 className="assembly-3">Inclusivity</h2>
            <img className="work-image-image" src={dump3} />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Header;
