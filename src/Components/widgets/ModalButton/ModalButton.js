import React, { Component } from "react";
import { Modal, Image } from "react-bootstrap";
import { ProductConsumer } from "../../../context";
import Buttons from "../Buttons/button";
import { connect } from "react-redux";
import { openModal, closeModal } from "../../../actions/addAction";

class ModalButton extends Component {
  render() {
    const { modalOpen,open } = this.props.basketProps;
    const { id, img, title, price } = this.props.basketProps.modalProduct;
    const modal = () => {
      if (!modalOpen) {
        return null;
      } else {
        return (
          <Modal show={true} size="sm" centered>
            <Modal.Header>
              <Modal.Title>
                <h6>Item Added To The Cart</h6>
              </Modal.Title>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => this.props.closeModal()}
              >
                <i className="fas fa-times-circle"></i>
              </div>
            </Modal.Header>
            <Modal.Body>
              <Image src={img} fluid className="mx-auto align-center" />
              <h5 className="text-center">{title}</h5>
              <h5 className="text-muted text-center">Price: {price}$</h5>
              <div className="d-flex flex-column justify-content-center align-center">
                <div
                  onClick={() => this.props.closeModal()}
                  className="text-center align-center"
                >
                  <Buttons
                    linkTo={id <= 13 ? "shirts" : "jeans"}
                    cta="Continue Shopping"
                  />
                </div>
                <div
                  onClick={() => this.props.closeModal()}
                  className="text-center align-center"
                >
                  <Buttons linkTo="Shopping-Cart" cta="Go to Cart" />
                </div>
              </div>
            </Modal.Body>
          </Modal>
        );
      }
    };
    return modal();
  }
}
const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { openModal, closeModal })(ModalButton);
