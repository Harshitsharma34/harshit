import React, { useEffect, useState, useRef } from "react";
import Prismic from "@prismicio/client";
import "react-responsive-modal/styles.css";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
//scrollytelling
import { Scrollama, Step } from "react-scrollama";
import NDA from "../Assets/NDA.json";
import New from "../Assets/new.json";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";

export default function Work() {
  //Modal
  const [open, setOpen] = useState(false);
  const [currente, setCurrente] = useState(null);
  const [currentProgressIndex, setCurrentProgressIndex] = useState(null);

  const onStepEnter = ({ data }) => {
    setCurrente(data);
  };

  const onStepProgress = ({ data }) => {
    setCurrentProgressIndex(data);
  };

  const apiEndpoint = "https://harshitsharma.prismic.io/api/v2";
  const accessToken =
    "MC5ZYUVtbXhNQUFETUFuODZN.77-977-9Ye-_ve-_vX8o77-977-977-977-977-9a--_ve-_ve-_ve-_ve-_ve-_vQITBF5h77-977-977-977-977-977-9TO-_vQ";
  // This is where you would add your access token for a Private repository
  const Client = Prismic.client(apiEndpoint, { accessToken });
  const [doc, setDoc] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  //case Study

  const fetchData = async () => {
    const response = await Client.query(
      Prismic.Predicates.at("document.type", "worklist"),
      { orderings: "[my.worklist.order desc]" }
    );
    if (response) {
      setDoc(response.results);
      console.log("harshit", response.results[0].data);
    }
  };

  return (
    <div className="container">
      <div className="container-div1">
        <h1>Case Studies with Results</h1>
        <p>
          Below projects showcase my EDPIT design process, iterations, final
          product, including results & achievements.
        </p>
      </div>

      <div className="work-container">
        {doc?.map((e) => (
          <div className="work-div">
            {e?.data.new ? (
              <Lottie className="nda" animationData={New} loop={true} />
            ) : (
              <Lottie
                className="nda"
                animationData={NDA}
                loop={true}
                style={{ display: "none" }}
              />
            )}
            {e?.data.nda ? (
              <Lottie className="nda" animationData={NDA} loop={true} />
            ) : (
              <Lottie
                className="nda"
                animationData={NDA}
                loop={true}
                style={{ display: "none" }}
              />
            )}
            {e?.data.nda ? (
              <Link to={``}>
                <div className="work-image">
                  <div className="work-image">
                    <span className="overlay"></span>
                    <img
                      className="thumbnail"
                      src={e?.data.images[0].image_link}
                    ></img>
                    <h1 className="work-title">{e?.data.title}</h1>
                  </div>
                  <div className="desc-div">
                    <p>{e?.data.long_description}</p>
                  </div>
                </div>
              </Link>
            ) : (
              <Link to={`/case-study/${e?.data.content_relationship.uid}`}>
                <div className="work-image">
                  <div className="work-image">
                    <span className="overlay"></span>
                    <img
                      className="thumbnail"
                      src={e?.data.images[0].image_link}
                    ></img>
                    <h1 className="work-title">{e?.data.title}</h1>
                  </div>
                  <div className="desc-div">
                    <p>{e?.data.long_description}</p>
                    <p>→</p>
                  </div>
                </div>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
