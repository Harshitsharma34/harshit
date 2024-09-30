import "../Css/dumpyard.css";
import React, { useEffect, useState } from "react";
import Prismic from "@prismicio/client";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import Logo from "../Assets/logo.json";
import Loading from "../Assets/loading.json";
import Contact from "./contact";
import Footer from "./footer";

function Dumpyard() {
  const [isLoading, setIsLoading] = useState(false);

  const apiEndpoint = "https://harshitsharma.prismic.io/api/v2";
  const accessToken =
    "MC5ZYUVtbXhNQUFETUFuODZN.77-977-9Ye-_ve-_vX8o77-977-977-977-977-9a--_ve-_ve-_ve-_ve-_ve-_vQITBF5h77-977-977-977-977-977-9TO-_vQ";
  // This is where you would add your access token for a Private repository
  const Client = Prismic.client(apiEndpoint, { accessToken });
  const [doc, setDocData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await Client.query(
        Prismic.Predicates.at("document.type", "dumpyard")
      );
      if (response) {
        setDocData(response.results[0].data);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="dumpyard-container">
      <div className="nav">
        <div className="navbar-container">
          <div className="logo">
            <Link to="/">
              <Lottie animationData={Logo} loop={true} />
            </Link>

            {/* <img className="logo" src={image} alt="My Happy SVG" /> */}
          </div>
          <Link className="backtohome-dump" to="/">
            Back to Home
          </Link>
        </div>
      </div>
      <div className="dumpyard">
        <h1 className="dumpyard-text">DUMPYARD</h1>

        <p>
          This is where I scribble down my designs at random which didn't make
          it to the final cut. Enjoy!
          <span> 🚀</span>
        </p>
      </div>

      <div className="responsive-grid">
        {doc?.dumpyard.map((e) => (
          <div className="images">
            {e.content_type == "Image" ? (
              <>
                {isLoading ? (
                  <Lottie animationData={Loading} loop={true} />
                ) : (
                  <>
                    <img className="dump-image" src={e.image_url} />
                  </>
                )}
              </>
            ) : (
              <>
                {isLoading ? (
                  <Lottie animationData={Loading} loop={true} />
                ) : (
                  <>
                    <video
                      className="dump-video"
                      src={e.video_url}
                      muted
                      playsInline
                      loop="loop"
                      autoPlay="autoplay"
                    ></video>
                  </>
                )}
              </>
            )}
          </div>
        ))}
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default Dumpyard;
