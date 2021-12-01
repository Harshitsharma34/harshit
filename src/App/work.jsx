import React, { useEffect, useState } from "react";
import Prismic from "@prismicio/client";
import { Date, Link, RichText } from "prismic-reactjs";

export default function Work() {
  const apiEndpoint = "https://harshitsharma.prismic.io/api/v2";
  const accessToken =
    "MC5ZYUVtbXhNQUFETUFuODZN.77-977-9Ye-_ve-_vX8o77-977-977-977-977-9a--_ve-_ve-_ve-_ve-_ve-_vQITBF5h77-977-977-977-977-977-9TO-_vQ";
  // This is where you would add your access token for a Private repository
  const Client = Prismic.client(apiEndpoint, { accessToken });
  const [doc, setDocData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at("document.type", "worklist")
      );
      if (response) {
        setDocData(response.results);
        console.log("harshit", response.results);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="container">
        {
        doc.map((e) => {
          <div className="project">
            <div className="project-image"></div>
            <h2 className="project-name">Project Name </h2>
            <p className="project-description">
              Description asdjad asshhee shahsdasdhb wahbdwah
            </p>
          </div>;
        })}
      </div>
    </div>
  );
}
