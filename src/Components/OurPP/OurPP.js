import React, { Component } from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import "./OurPP.css";
import Product from "../NavbarRoutes/Shirt/Product";

//REDUX
import { connect } from "react-redux";
import { addToCart } from "../../actions/addAction";

class OurPP extends Component {
  render() {
    // const { id, title, img, price, inCart } = value.productsTwo;
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },

        {
          breakpoint: 425,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
    };

    let last4Products = this.props.basketProps.products.slice(-5);
    let OurPPItems = last4Products.map((product) => {
      return (
        <div key={product.id}>
          <Product key={product.id} product={product} />{" "}
        </div>
      );
    });
    return (
      <div className="OurPP">
        <div>
          <h2
            style={{
              textAlign: "center",
              marginTop: "30px",
              marginBottom: "20px",
            }}
          >
            OUR MOST POPULAR PRODUCTS
          </h2>
        </div>
        <Container>
          <Slider {...settings}>{OurPPItems}</Slider>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { addToCart })(OurPP);
