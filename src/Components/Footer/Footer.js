import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Buttons from '../widgets/Buttons/button'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <Container fluid>
          <Row>
            <Col xs={12} xl={4}  md={4}>
              <div className="foterLogo">
                <p style={{ fontSize: "30px", fontWeight:'700', color: "#61b4d6" }}>
                  <i className="fas fa-male"></i> CASUAL MEN
                </p>
                <p>121.2173.314</p>
                <div>
                <i className="fab fa-facebook-square fa-2x icon"></i>
                <i className="fab fa-instagram fa-2x icon"></i>
                <i className="fab fa-twitter-square fa-2x icon"></i>
                </div>
              </div>
            </Col>
            <Col xs={6} xl={2} md={2}>
              <div>
                  <h4>About Casual Men</h4>
                  <ul>
                      <li>Our Story</li>
                      <li>Career</li>
                      <li>Corporate Responsibilities</li>
                      <li>Corporate Sales</li>
                      <li>International</li>
                  </ul>
              </div>
            </Col>
            <Col xs={6} xl={2}  md={2}>
              <div>
              <h4>Customer Service</h4>
                  <ul>
                      <li>Gift Cards</li>
                      <li>Shiping & Return</li>
                      <li>Order Status</li>
                      <li>Fit&Size chart</li>
                      <li>Contact Us</li>
                  </ul>
              </div>
            </Col>
            <Col xs={6} xl={2}  md={2}>
              <div>
                  <h4>WANNA TALK ?</h4>
                  <Buttons linkTo="/" cta="Contact"></Buttons>
              </div>
            </Col>
            <Col xs={6} xl={2}  md={2}>
            <div>
                  <h5>FIND A SHOP LOCATION</h5>
                  <Buttons linkTo="/" cta="SEARCH"></Buttons>
              </div>
            </Col>
          </Row>
          <Row>
            <div>
              {" "}
              <h6>@Copywrite 2020 Casual Men  | Terms & Condition | Privacy & Policy</h6>
            </div>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
