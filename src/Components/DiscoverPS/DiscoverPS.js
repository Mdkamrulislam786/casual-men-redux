import React from "react";
import { Container, Row, Col, Image, Carousel } from "react-bootstrap";
import "./DiscoverPS.css";
import Buttons from "../widgets/Buttons/button";
import item from '../../assets/Jeans/j-col.jpg'
import item2 from '../../assets/T-Shirts/wh-unsplash.jpg'

const DiscoverPS = () => {
  return (
    <div className="DiscoverPS">
      <div>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          DISCOVER OUR COLLECTION FOR YOU
        </h2>
      </div>
      <Container fluid>
        <Row>
          <Carousel interval={3000}>
            <Carousel.Item>
              <div className="CarouselItem d-flex Discover">
                <Col>
                  <div>
                    <div>
                      <h3>Big & Tail Collection</h3>
                      <p>
                        loremDuis exercitation sit officia consectetur laborum
                        voluptate occaecat.loremDuis exercitation sit officia consectetur laborum
                        voluptate occaecat.
                      </p>
                      <Buttons cta="Show Me" linkTo="/online-shop&all-collections"></Buttons>
                    </div>
                  </div>
                </Col>

                <Col>
                  <div>
                    <Image
                      src={item2}
                      style={{
                        width: "100%",
                        height: "80vmin",
                      }}
                    />
                  </div>
                </Col>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="CarouselItem d-flex Discover">
                <Col>
                  <div>
                    <div>
                      <h3>Nike Collection</h3>
                      <p>
                        loremDuis exercitation sit officia consectetur laborum
                        voluptate occaecat.
                      </p>
                      <Buttons cta="Show Me" linkTo="/online-shop&all-collections"></Buttons>
                    </div>
                  </div>
                </Col>

                <Col>
                  <div>
                    <Image
                      src={item}
                      style={{
                        width: "100%",
                        height: "80vmin",
                      }}
                    />
                  </div>
                </Col>
              </div>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </div>
  );
};

export default DiscoverPS;
