import React, { useEffect, useState, useRef } from "react";
import Prismic from "@prismicio/client";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import arrow from "../Assets/Arrow.svg";
import "../Css/work.css";
import Divider from "../Assets/divider.svg";
//Modal
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import CloseButton from "../Assets/Close button2.svg";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import "swiper/modules/navigation/navigation.min.css";


const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p>
      {isReadMore ? text?.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

export default function Work() {
  //Modal
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const closeIcon = (
    <svg
      width="50"
      height="50"
      viewBox="0 0 71 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="35.5" cy="35.5" r="35.5" fill="#4A4B6A" fill-opacity="0.43" />
      <path d="M21.0645 21.0645L50 50" stroke="#E1E2FF" stroke-width="5" />
      <path d="M21.0645 50L50 21.0644" stroke="#E1E2FF" stroke-width="5" />
    </svg>
  );

  const apiEndpoint = "https://harshitsharma.prismic.io/api/v2";
  const accessToken =
    "MC5ZYUVtbXhNQUFETUFuODZN.77-977-9Ye-_ve-_vX8o77-977-977-977-977-9a--_ve-_ve-_ve-_ve-_ve-_vQITBF5h77-977-977-977-977-977-9TO-_vQ";
  // This is where you would add your access token for a Private repository
  const Client = Prismic.client(apiEndpoint, { accessToken });
  const [doc, setDoc] = useState([]);
  const [caseStudy, setCaseStudy] = useState([]);
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
    }
  };

  return (
    <div className="container">
      <svg
        xmlns="https://ik.imagekit.io/harshitsharma/Untitled-1_ww-owONLz2.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1658832063458"
        viewBox="0 0 42 42"
        width="42"
        height="42"
      ></svg>
      <h2 className="work-heading">WORK</h2>
      <Link to={`/case-study/${doc[0]?.data.content_relationship.uid}`}>
        <div className="work-div">
          <div className="ext-div">
            <span className="grad-overlay"></span>
            <img
              className="work-image-image"
              src={doc[0]?.data.images[0].image_link}
            />
          </div>
          <div className="work-content">
            <p>{doc[0]?.data.long_description}</p>
          </div>
        </div>
      </Link>
      <div className="work-list-swipe">
        <Swiper
          // install Swiper modules
          className="Swiper"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation={true}
          spaceBetween={20}
          scrollbar={{ draggable: true }}
          breakpoints={{
            // when window width is >= 640px
            0: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            740: {
              slidesPerView: 2,
            },
            1100: {
              slidesPerView: 2.5,
            },
            1400: {
              slidesPerView: 3.01,
            },
          }}
        >
          {doc?.slice(1).map((e) => (
            <SwiperSlide>
              <Link to={`/case-study/${e?.data.content_relationship.uid}`}>
                <div id="top" className="project">
                  <div className="project-logo">
                    <img
                      className="project-logo-cover"
                      src={e.data.project_logo}
                    />
                  </div>
                  <div className="project-image">
                    <span className="grad-overlay-sm"></span>
                    <img
                      className="project-image-cover"
                      src={e.data.project_image}
                    />
                  </div>

                  <p className="project-description">
                    {e.data.small_description}
                  </p>
                </div>
               
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
