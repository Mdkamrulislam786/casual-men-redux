import React from "react";
import { Card } from "react-bootstrap";
import "./FeatureCard.css";

const FeatureCard = (props) => {
  // console.log(props);
  return (
    <div onClick={props.onClick} className="FeatureCard">
      <div style={{ textDecoration: "none", color: "#000" }}>
        <Card
          style={{
            width: "17rem",
            paddingLeft: "20px",
            paddingRight: "20px",
            overflow: "hidden",
            borderColor: "transparent",
            transition: "all 1s linear",
            border: "transparent",
          }}
          className="Card"
        >
          <div className="cardImg">
            <Card.Img variant="top" src={props.image} className="ppImage" />
          </div>
          <Card.Body>
            <div className="d-flex flex-column">
              <div
                style={{ paddingBottom: "10px" }}
                className="d-flex flex-row justify-content-between"
              >
                <p>{props.title}</p>
                <h6>{props.price}</h6>
              </div>
              <div className="colors-circle">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default FeatureCard;
