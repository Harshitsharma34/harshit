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
  const [currentStepIndex, setCurrentStepIndex] = useState(null);
  const [currentProgressIndex, setCurrentProgressIndex] = useState(null);

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
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
    }
  };

  return (
    <div className="container">
      <Scrollama offset={0.6} onStepEnter={onStepEnter} debug>
        <div
          style={{
            position: "sticky",
            top: 0,
            opacity: currentStepIndex === 1 ? 1 : 1,
            transition: "0.01ms, ease-in 0.01ms",
          }}
        >
        </div>
        {doc?.map((_, stepIndex) => (
          <Step data={stepIndex} key={stepIndex}>
            <div
              style={{
                position: "sticky",
                opacity: currentStepIndex === stepIndex ? 1 : 0.5,
                transition: "100ms, ease-in-out 100ms",
              }}
            >
              <div
                className="work-div"
                style={{
                  width: currentStepIndex === stepIndex ? "100%" : "85%",
                  height: currentStepIndex === stepIndex ? "680px" : "550px",
                  opacity: currentStepIndex === stepIndex ? 1 : 0.8,
                  transition: "200ms, ease-in 200ms",
                }}
              >
                {doc[stepIndex]?.data.nda ? (
                  <Lottie className="nda" animationData={NDA} loop={true} />
                ) : (
                  <Lottie
                    className="nda"
                    animationData={NDA}
                    loop={true}
                    style={{ display: "none" }}
                  />
                )}
                {doc[stepIndex]?.data.new ? (
                  <Lottie className="nda" animationData={New} loop={true} />
                ) : (
                  <Lottie
                    className="nda"
                    animationData={New}
                    loop={true}
                    style={{ display: "none" }}
                  />
                )}
                {doc[stepIndex]?.data.new ? (
                  <Link to={``}>
                    <div className="work-content">
                      <h1 className="work-title">
                        {doc[stepIndex]?.data.title}
                      </h1>
                      <p>{doc[stepIndex]?.data.long_description}</p>
                    </div>
                    <img
                      className="work-image-image"
                      src={doc[stepIndex]?.data.images[0].image_link}
                    />
                  </Link>
                ) : (
                  <Link
                    to={`/case-study/${doc[stepIndex]?.data.content_relationship.uid}`}
                  >
                    <div className="work-content">
                      <h1 className="work-title">
                        {doc[stepIndex]?.data.title}
                      </h1>
                      <p>{doc[stepIndex]?.data.long_description}</p>
                    </div>
                    <img
                      className="work-image-image"
                      src={doc[stepIndex]?.data.images[0].image_link}
                    />
                  </Link>
                )}
              </div>
            </div>
          </Step>
        ))}
      </Scrollama>
    </div>
  );
}

// {
//   doc?.map((e) => (
//     <div>
//       <div className="work-div">
//         {e?.data.nda ? (
//           <Lottie className="nda" animationData={NDA} loop={true} />
//         ) : (
//           <Lottie
//             className="nda"
//             animationData={NDA}
//             loop={true}
//             style={{ display: "none" }}
//           />
//         )}
//         {e?.data.new ? (
//           <Lottie className="nda" animationData={New} loop={true} />
//         ) : (
//           <Lottie
//             className="nda"
//             animationData={New}
//             loop={true}
//             style={{ display: "none" }}
//           />
//         )}
//         {e?.data.new ? (
//           <Link to={``}>
//             <div className="work-content">
//               <h1 className="work-title">{e?.data.title}</h1>
//               <p>{e?.data.long_description}</p>
//             </div>
//             <img
//               className="work-image-image"
//               src={e?.data.images[0].image_link}
//             />
//           </Link>
//         ) : (
//           <Link to={`/case-study/${e?.data.content_relationship.uid}`}>
//             <div className="work-content">
//               <h1 className="work-title">{e?.data.title}</h1>
//               <p>{e?.data.long_description}</p>
//             </div>
//             <img
//               className="work-image-image"
//               src={e?.data.images[0].image_link}
//             />
//           </Link>
//         )}
//       </div>
//     </div>
//   ));
// }
