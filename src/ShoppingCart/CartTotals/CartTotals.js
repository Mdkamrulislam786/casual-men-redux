import React, { Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
//REDUX
import { connect } from "react-redux";
import { clearCart } from "../../actions/addAction";

const CartTotals = ({ value, clearCart }) => {
  const { cartTotal } = value;
  return (
    <Fragment>
      <Container className="d-flex justify-content-end">
        <Row>
          <Col>
            <Link to="Shopping-Cart">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                onClick={() => clearCart()}
              >
                Clear Cart
              </button>
            </Link>
            <h5 className="text-title d-flex justify-content-end mb-3 px-5">
              <span>Total : </span>
              <strong>{cartTotal} $</strong>
            </h5>
            <div className="d-flex justify-content-center  mb-3">
              <Button
                onClick={() => alert(` Confirm Your Order, Total:${cartTotal}`)}
                variant="primary"
              >
                Order now
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default connect(null, { clearCart })(CartTotals);
