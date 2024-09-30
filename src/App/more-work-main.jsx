import Cantshow from "../Assets/Can't show.svg";
import "../Css/more-work.css";
import React, { useEffect, useState } from "react";
import Prismic from "@prismicio/client";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import arrow from "../Assets/arrow23.svg";
import Lock from "../Assets/lock.svg";

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
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await Client.query(
      Prismic.Predicates.at("document.type", "more_work"),
      { orderings: "[my.more_work.order desc]" }
    );
    if (response) {
      setDoc(response.results);
      console.log("harshit", response.results);
    }
  };

  const login = (params) => (event) => {
    let user_password = params.password;

    if (user_password == event.target[0].value) {
      window.location.href = params.drive_url;
    }

    event.preventDefault();
  };

  return (
    <div className="more-work-div">
      <div className="container-more-work">
        <div className="more-work">
          <div className="more-work-heading-div">
            <h2 className="more-work-heading">SOME MORE WORK</h2>
            <p>
              I did these work under NDA so i can't showcase this over here. But
              i can give you access to my work if ask politely.
            </p>
          </div>

          <img className="cantshow-img" src={Cantshow}></img>
          <br />
        </div>

        <div className="more-work-swiper">
          <div className="work-list-swipe-mw">
            <Swiper
              // install Swiper modules
              className="Swiper"
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              navigation={true}
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
                  slidesPerView: 3,
                },
              }}
            >
              {doc?.map((e) => (
                <a href={e.data.drive_url}>
                  <SwiperSlide>
                    <div className="project-mw">
                      <div className="project-logo-mw">
                        <img
                          className="project-logo-cover"
                          src={e.data.project_logo}
                        />
                      </div>
                      <div className="project-image-mw">
                        <span className="grad-overlay-sm-mw">
                          <form
                            onSubmit={login({
                              password: e.data.password,
                              drive_url: e.data.drive_url,
                            })}
                            className="form-signin"
                          >
                            <div className="key-div">
                              <p className="secret-key">
                                Enter the Secret key 🤫
                              </p>
                              <input
                                className="password-input"
                                type="password"
                                placeholder="Type the key"
                                required
                              ></input>
                              <input
                                className="arrow"
                                type="image"
                                alt="submit"
                                src={arrow}
                                width={40}
                              ></input>
                            </div>
                          </form>
                        </span>
                        <img
                          className="project-image-cover"
                          src={e.data.image_link}
                        />
                      </div>
                      {/* <div className="project-name-desc">
                        <img
                          className="lock"
                          type="image"
                          alt="submit"
                          src={Lock}
                          color="white"
                        />
                      </div> */}
                      <p className="project-description-mw">
                        {e.data.description}
                      </p>

                      {/* <a href={e.data.drive_url}>
                    <img
                      className="arrow"
                      type="image"
                      alt="submit"
                      src={arrow}
                      width={40}
                    ></img>
                  </a> */}
                    </div>
                  </SwiperSlide>
                </a>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreWorkMain;
