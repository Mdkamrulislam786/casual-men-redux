import React from "react";
import {Image} from 'react-bootstrap'
import './AllDressHeader.css'
const AllDressHeader = (props) => {
  return (
    <div>
      <div className="AllTshirtsHaeder">
        <Image src={props.Image} className="TShirtsHeaderImg  parallax" />
        <div className="overlay"></div>
        <div className="TshirtHeaderTextBlock">
          <h1>{props.h1}</h1>
          <p>
            {props.para}
          </p>
        </div>
      </div>
      <div>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            marginTop: "2rem",
          }}
        >
          {props.h2}
        </h2>
      </div>
    </div>
  );
};

export default AllDressHeader;
