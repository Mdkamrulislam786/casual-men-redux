import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./buttons.css";

const Buttons = (props) => {
  return (
    <>
      <Button variant="none" as={Link} to={props.linkTo} className="CMButton">
        <span className="buttonp">{props.cta}</span>
      </Button>
    </>
  );
};

export default Buttons;
