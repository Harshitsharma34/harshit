import Cantshow from "../Assets/Can't show.svg";
import "../Css/more-work.css";
import React, { useEffect, useState } from "react";
import Prismic from "@prismicio/client";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import arrow from "../Assets/Arrow.svg";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";

function MoreWorkMain() {
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
      Prismic.Predicates.at("document.type", "more_work")
    );
    if (response) {
      setDoc(response.results);
      console.log("harshit", response.results);
    }
  };
  return (
    <div className="container-more-work">
     
      <div className="more-work">
        <h2 className="more-work-heading">SOME MORE WORK</h2>
        <img className="cantshow-img" src={Cantshow}></img>
      </div>
      <div className="more-work-swiper">
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
                <p className="project-description">
                  {e.data.description}
                </p>
              
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
    </div>
  );
}

export default MoreWorkMain;
