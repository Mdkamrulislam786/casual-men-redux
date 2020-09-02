import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default class Deafult extends Component {
  render() {
    return (
      <div style={{height:'80vh'}} >
        <Container>
          <Row >
            <Col  className=" mt-5 text-center text-uppercase">
              <h1>404</h1>
              <h1>Error</h1>
              <h2>Page Not Found</h2>
              <h3>
                tec requested URL
                <span style={{ color: "red" }}>
                  {this.props.location.pathname}
                </span>
                
              </h3>
              <h3>was not found</h3>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
