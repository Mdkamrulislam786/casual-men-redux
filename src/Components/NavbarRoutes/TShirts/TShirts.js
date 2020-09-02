import React, { Component } from "react";
import { Container } from "react-bootstrap";
import FeatureCard from "../../widgets/ShoppingCards/FeatureCard/FeatureCard";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./TShirts.css";

//Images
import img from "../../../assets/T-Shirts/Black_Polo.jpg";
import img2 from "../../../assets/T-Shirts/v-neck-long.jpg";
import img3 from "../../../assets/T-Shirts/v-neck-t-shirt.jpg";
import img4 from "../../../assets/T-Shirts/grey-v-neck.jpg";
import img5 from "../../../assets/T-Shirts/C-unsplash.jpg";

class TShirts extends Component {
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
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
    return (
      <div className="MainCatagory">
        <div>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "2rem",
              marginTop: "2rem",
            }}
          >
            CHOOSE A CATAGORY OF T-SHIRTS
          </h2>
        </div>
        <Container>
          <Slider {...settings}>
            <div>
              <Link to="/polos">
                <FeatureCard image={img} title="Polos" />
              </Link>
            </div>
            <div>
              <Link to="/LongSleeves">
                <FeatureCard image={img2} title="Long Sleeves" />
              </Link>
            </div>
            <div>
              <Link to="/ShortSleeves">
                <FeatureCard image={img3} title="Short Sleeve" />
              </Link>
            </div>
            <div>
              <Link to="/Vneck">
                {" "}
                <FeatureCard image={img4} title="V-Neck" />
              </Link>
            </div>
            <div>
              <Link to="/Circle-neck">
                <FeatureCard image={img5} title="Circle Neck" />
              </Link>
            </div>
          </Slider>
        </Container>
      </div>
    );
  }
}

export default TShirts;
