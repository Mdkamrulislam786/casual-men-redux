import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import OurPP from "../../OurPP/OurPP";
import TShirts from "../TShirts/TShirts";
import "./Collections.css";
import ProductList from "../Shirt/ProductList";
import Jeans from "../Jeans/Jeans";

const Collections = () => {
  return (
    <div className="Collections">
      <Container>
        <Tab.Container defaultActiveKey="first">
          <Row>
            <Col>
              <Nav className="d-flex flex-row justify-content-center text-center">
                <Nav.Item>
                  <Nav.Link eventKey="first">T-Shirts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Shirts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Jeans & Pants</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Most Popular</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
          <Row>
            <Col>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <TShirts />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <ProductList />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Jeans />
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <OurPP />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
};

export default Collections;
