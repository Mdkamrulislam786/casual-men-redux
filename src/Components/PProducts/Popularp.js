import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./popularp.css";
import Buttons from "../widgets/Buttons/button";
import {Link} from 'react-router-dom'

const Popularp = () => {
  return (
    <div>
      <div className="popularp">
        <Container fluid>
          <Row>
            <Col>
              <div className="popular popular1">
                <div className="texts">
                  <div id="overlay"></div>
                  <h3>Exclusive T-Shirts</h3>
                  <p>
                    loremCulpa in minim id veniam ipsum aute
                    <br />
                    elit reprehenderit dolor officia consectetur
                  </p>
                  <Buttons cta="Show Me" linkTo="/T-Shirts"></Buttons>
                </div>
              </div>
            </Col>
            <Col>
              <div className="popular popular2">
                <div className="texts">
                  <div id="overlay"></div>
                  <h3>Jeans & Denims</h3>
                  <p>
                    loremCulpa in minim id veniam ipsum aute
                    <br />
                    elit reprehenderit dolor officia consectetur
                  </p>
                  <Buttons cta="Show Me" linkTo="/jeans"></Buttons>
                </div>
              </div>
            </Col>
          </Row>
          <div className="middle">
            <Button size="lg" as={Link} to="/online-shop&all-collections" className="middle-btn" variant="danger">
              EXPLORE NOW
            </Button>
          </div>
          <Row>
            <Col>
              <div className="popular popular3">
                <div className="texts">
                  <div id="overlay"></div>
                  <h3>Long Sleeves Shirts</h3>
                  <p>
                    loremCulpa in minim id veniam ipsum aute
                    <br />
                    elit reprehenderit dolor officia consectetur
                  </p>
                  <Buttons cta="Show Me" linkTo="/shirts"></Buttons>
                </div>
              </div>
            </Col>
            <Col>
              <div className="popular popular4">
                <div className="texts">
                  <div id="overlay"></div>
                  <h3>Exclusive Collections</h3>
                  <p>
                    loremCulpa in minim id veniam ipsum aute
                    <br />
                    elit reprehenderit dolor officia consectetur
                  </p>
                  <Buttons
                    cta="Show Me"
                    linkTo="/online-shop&all-collections"
                  ></Buttons>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Popularp;
