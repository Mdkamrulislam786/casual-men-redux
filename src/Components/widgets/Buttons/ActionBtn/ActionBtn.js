import React from "react";
import { Button } from "react-bootstrap";
import "./ActionBtn.css";

const ActionBtn = (props) => {
  return (
    <>
      <Button
        disabled={props.cta==='IN CART' ? true: false}
        variant="none"
        type="button"
        className="ActionBtn"
        onClick={props.onClick}
      >
        <span className="buttonp" >
          <i style={{ color: "goldenrod" }} className="fas fa-shopping-cart"></i>
          {props.cta}
        </span>
      </Button>
    </>
  );
};

export default ActionBtn;
