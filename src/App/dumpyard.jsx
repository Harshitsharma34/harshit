import "../Css/dumpyard.css";
import React, { useEffect, useState } from "react";
import Prismic from "@prismicio/client";
import { Date, RichText } from "prismic-reactjs";
import image from "../Assets/Logo.svg";
import { Link } from "react-router-dom";
import image1 from "../Assets/1.jpg";
import image2 from "../Assets/2.jpg";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function Dumpyard() {
  const images = [
    "https://picsum.photos/300/300?image=206",
    //...
    "https://picsum.photos/300/300?image=206",

    "https://picsum.photos/300/300?image=206",
    "https://picsum.photos/300/300?image=206",
  ];

  const apiEndpoint = "https://harshitsharma.prismic.io/api/v2";
  const accessToken =
    "MC5ZYUVtbXhNQUFETUFuODZN.77-977-9Ye-_ve-_vX8o77-977-977-977-977-9a--_ve-_ve-_ve-_ve-_ve-_vQITBF5h77-977-977-977-977-977-9TO-_vQ";
  // This is where you would add your access token for a Private repository
  const Client = Prismic.client(apiEndpoint, { accessToken });
  const [doc, setDocData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at("document.type", "dumpyard")
      );
      if (response) {
        setDocData(response.results[0]);
        console.log("harshit", response);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="nav">
        <div className="navbar-container">
          <img className="logo" src={image} alt="My Happy SVG" />
          <Link className="backtohome" to="/">
            Back to 🏠{" "}
          </Link>
        </div>
      </div>
      <div className="dumpyard">
        <h1 className="dumpyard-text">DUMPYARD</h1>
        <br />
        <p>
          This is where I randomly dump stuffs. Enjoy!<span> 🚀</span>
        </p>
      </div>
      <div className="responsive-grid">
        <ResponsiveMasonry columnsCountBreakPoints={{ 450: 1, 750: 2 }}>
          <Masonry columnsCount={2} gutter="20px">
            {images.map((image, i) => (
              <img
                className="dumpyard-image"
                key={i}
                src={image}
                style={{ width: "100%", display: "block" }}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
}

export default Dumpyard;
