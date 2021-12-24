import React, { useEffect, useState } from "react";
import Prismic from "@prismicio/client";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import arrow from "../Assets/Arrow.svg";
import { Link } from "react-router-dom";
import "../Css/work.css";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";

export default function Work() {
  const apiEndpoint = "https://harshitsharma.prismic.io/api/v2";
  const accessToken =
    "MC5ZYUVtbXhNQUFETUFuODZN.77-977-9Ye-_ve-_vX8o77-977-977-977-977-9a--_ve-_ve-_ve-_ve-_ve-_vQITBF5h77-977-977-977-977-977-9TO-_vQ";
  // This is where you would add your access token for a Private repository
  const Client = Prismic.client(apiEndpoint, { accessToken });
  const [doc, setDoc] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await Client.query(
      Prismic.Predicates.at("document.type", "worklist")
    );
    if (response) {
      setDoc(response.results);
      console.log("harshit", response.results);
    }
  };

  return (
    <div className="container">
      <h2 className="work-heading">WORK</h2>
      <div className="work-div">
        <span className="work-image"></span>
        <div className="work-content">
          <div className="tags">
            <button className="personal-project">Personal Project</button>
            <button className="branding">Branding</button>
            <button className="sole-ownership">Sole Ownership</button>
            <button className="product-design">Product Design</button>
            <button className="animation">Animations</button>
            <button className="strategy">Strategy</button>
          </div>
          <h1>Project Name</h1>
          <p>Lorem Ipsum</p>
          <div className="work-buttons">
            <Link to="/" className="case-study">
              Read Case Study
            </Link>
            <a className="behance">Behance</a>
          </div>
        </div>
      </div>

      <Swiper
        // install Swiper modules
        className="Swiper"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={1}
        slidesPerView={3}
        navigation={true}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {doc?.map((e) => (
          <SwiperSlide>
            <div className="project">
              <div className="project-image"></div>
              <h2 className="project-name">{e.data.title} </h2>
              <p className="project-description">{e.data.small_description}</p>
              <img
                className="arrow"
                type="image"
                alt="submit"
                src={arrow}
                width={40}
              ></img>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
