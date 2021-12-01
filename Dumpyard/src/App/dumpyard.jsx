import "../Css/dumpyard.css";
import React,{useEffect,useState} from "react";
import Prismic from '@prismicio/client'
import { Date, Link, RichText } from 'prismic-reactjs'



function Dumpyard() {
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
        setDocData(response.results[0]);
        console.log("harshit",response)
      }
    };
    fetchData();
  },[]);

  return (
    <div className="dumpyard">
      <h1 className="dumpyard-text">DUMPYARD</h1>
      <br />
      <p>
        This is where I randomly dump stuffs. Enjoy!<span> 🚀</span>
      </p>
    </div>
  );
}

export default Dumpyard;
