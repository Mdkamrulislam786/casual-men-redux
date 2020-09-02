import React, { Component } from "react";
import { Container, Row, Col, Image, Tab, Nav, Modal } from "react-bootstrap";

//COMPONENTS
import payoneer from "../../../../assets/Payoneer_logo.svg.png";
import OurPP from "../../../OurPP/OurPP";
import ActionBtn from "../../Buttons/ActionBtn/ActionBtn";
import Buttons from "../../Buttons/button";
import "./ProductCard.css";

//REDUX
import { connect } from "react-redux";
import { addToCart } from "../../../../actions/addAction";

//Image
import sizechart from "../../../../assets/size-chart.png";

class ProductCard extends Component {
  state = {
    show: false,
    setShow: false,
  };

  handleClose = () => {
    this.setState(() => {
      return {
        show: false,
        setShow: false,
      };
    });
  };
  render() {
    const {
      id,
      img,
      info,
      price,
      title,
      inCart,
    } = this.props.basketProps.detailProduct;

    return (
      <div
        className="ProductCard"
        style={{ marginTop: "3rem", marginBottom: "3rem" }}
      >
        <Container>
          <Row>
            <Col
              xs={12}
              md={6}
              xl={6}
              className="d-flex justify-content-center text-center align-center"
            >
              <Image src={img} className="product-img" fluid />
            </Col>
            <Col xs={12} md={6} xl={6}>
              <div>
                <h3>{title}</h3>
                <b>Price:</b>
                <span> {price}$</span>
                <p>
                  Pay with{" "}
                  <img
                    src={payoneer}
                    alt="product"
                    style={{
                      height: "24px",
                      padding: "0px 2px",
                      display: "inline-block",
                    }}
                  />{" "}
                  to get 5% off
                </p>
              </div>
              <div
                style={{
                  backgroundColor: "goldenrod",
                  height: "3px",
                  width: "90%",
                }}
              ></div>
              <div style={{ margin: "7px 0px" }}>
                <b>Color:</b> <span> SkyBlue</span>
                <div className="colors-circle" style={{ margin: "7px 0px" }}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="productSizes">
                <b>Sizes: </b>
                <br />
                <p>
                  <span>S</span>
                  <span>M</span>
                  <span>L</span>
                  <span>XL</span>
                  <button
                    type="button"
                    varient="info"
                    onClick={() =>
                      this.setState(() => {
                        return {
                          show: true,
                          setShow: true,
                        };
                      })
                    }
                  >
                    View size chart
                  </button>
                </p>
                <Modal
                  show={this.state.show}
                  onHide={() => this.state.setShow}
                  size="sm"
                  centered
                >
                  <Modal.Header>
                    <Modal.Title>
                      <h5>Size Chart</h5>
                    </Modal.Title>
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => this.handleClose()}
                    >
                      <i className="fas fa-times-circle"></i>
                    </div>
                  </Modal.Header>
                  <Modal.Body>
                    <Image src={sizechart} fluid />
                  </Modal.Body>
                </Modal>
              </div>

              {/* ADDTOCART-BUTTON */}
              <div className="d-flex">
                <ActionBtn
                  cta={inCart ? "IN CART" : "ADD TO CART"}
                  onClick={() => {
                    this.props.addToCart(id);
                  }}
                  // onClick={() => props.addBasket(props.add)}
                />
                <Buttons linkTo="/shirts" cta="Back To Products" />
              </div>

              <div style={{ color: "black", margin: "10px 0px" }}>
                <Tab.Container defaultActiveKey="first">
                  <Row>
                    <Col>
                      <Nav className="d-flex flex-row justify-content-center text-center">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Details</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Description</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Reviews</Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <ul>
                            <li>150 GSM striped knit</li>
                            <li>Crew neckline</li>
                            <li>Light weight</li>
                            <li>Super Comfortabble</li>
                            <li>Best Quality 100% Guaranteed</li>
                          </ul>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <div className="productDescription">
                            <h3>About The Product</h3>
                            <p>{info}</p>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                          <div>5***** : 102person</div>
                          <div>4**** : 12person</div>
                          <div>3*** : 4person</div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} xl={12}>
              <div
                style={{
                  margin: "2rem 0px",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    fontSize: "2rem",
                    textTransform: "uppercase",
                    marginBottom: "2rem",
                  }}
                >
                  Related Products
                </h3>
                <OurPP />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});
export default connect(mapStateToProps, { addToCart })(ProductCard);
