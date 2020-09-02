import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "./CartItems.css";
//REDUX
import { connect } from "react-redux";
import { increment, decrement, removeItem } from "../../actions/addAction";

const CartItems = ({ item, increment, removeItem, decrement }) => {
  const { id, title, img, price, total, count } = item;

  return (
    <Row className="text-center text-capitalize my-2">
      <Col className="mx-auto">
        <Image
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          alt="products"
          fluid
        />
      </Col>
      <Col className="mx-auto">{title}</Col>
      <Col className="mx-auto">{price} $</Col>
      <Col className="mx-auto">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span className="btn btn-black mx-1" onClick={() => increment(id)}>
              +
            </span>
          </div>
        </div>
      </Col>
      <Col className="mx-auto">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fa fa-trash" />
        </div>
      </Col>
      <Col className="mx-auto">{total} $</Col>
    </Row>
  );
};
export default connect(null, { increment, decrement, removeItem })(CartItems);
