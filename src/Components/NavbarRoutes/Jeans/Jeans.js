import React, { Component } from "react";
import { Container } from "react-bootstrap";
import AllDressHeader from "../../widgets/AllDressHeader/AllDressHeader";
import Slider from "react-slick";
import Product from "../Shirt/Product";

//Images
import jeansHeader from "../../../assets/Jeans/jeans-collections.jpg";
//REDUX
import { connect } from "react-redux";
import { addToCart } from "../../../actions/addAction";

class Jeans extends Component {
  render() {
    const settings = {
      accessibility: true,
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 3000,
      focusOnSelect: true,
      rows: 2,
      responsive: [
        {
          breakpoint: 1024,
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
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    let size = 23;
    let jeansItems = this.props.basketProps.products.slice(13, size);
    return (
      <Container>
        <div className="Jeans" style={{ margin: "3rem 0rem" }}>
          <div>
            <AllDressHeader
              Image={jeansHeader}
              h1="JEANS FOR MEN"
              para="Eiusmod laborum deserunt dolor sunt. Reprehenderit excepteur ad minim nostrud. Minim aliqua quis dolor sint do aliquip dolore esse esse non dolor aliqua eiusmod. Consequat eu minim commodo fugiat. Nulla ."
              h2="CHOOSE YOUR FAVOURITE JEANS NOW"
            />
          </div>

          <Slider {...settings}>
            {jeansItems.map((product) => {
              return (
                <div key={product.id}>
                  <Product key={product.id} product={product} />
                </div>
              );
            })}
          </Slider>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, { addToCart })(Jeans);
