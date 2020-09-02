import React, { Component } from "react";
import { Container } from "react-bootstrap";
import FeatureCard from "../../../../../widgets/ShoppingCards/FeatureCard/FeatureCard";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import AllDressHeader from "../../../../../widgets/AllDressHeader/AllDressHeader";

//Images
import ShortSleevesHeader from "../../../../../../assets/T-Shirts/Short-Sleeves/SS-Header.jpg";
import img from "../../../../../../assets/T-Shirts/Short-Sleeves/VNSS.jpg";
import img2 from "../../../../../../assets/T-Shirts/Short-Sleeves/YSS.jpg";
import img3 from "../../../../../../assets/T-Shirts/Short-Sleeves/BSS.jpg";
import img4 from "../../../../../../assets/T-Shirts/Short-Sleeves/GBSS.jpg";
import img5 from "../../../../../../assets/T-Shirts/Short-Sleeves/WSS.jpg";

class ShortSleeves extends Component {
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
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },

        {
          breakpoint: 425,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          },
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          },
        },
      ]
    };
    return (
      <div
        className="AllTshirts"
        style={{ marginTop: "2rem", marginBottom: "3rem" }}
      >
        <AllDressHeader
          Image={ShortSleevesHeader}
          h1="ONE OF THE MOST COMFORTABLE WEAR FOR MEN"
          h2="CHOOSE YOUR FAVOURITE ONE NOW"
        />
        <Container>
          <Slider {...settings}>
            <div>
              <Link
                to="/polos"
                style={{ textDecoration: "none", color: "black" }}
              >
                <FeatureCard image={img} title="Blue" price="9$" />
              </Link>
            </div>
            <div>
              <FeatureCard image={img2} title="Yellow" price="17$" />
            </div>
            <div>
              <FeatureCard image={img3} title="Blue Ash" price="20$" />
            </div>
            <div>
              <FeatureCard image={img4} title="Black/Slim Fit" price="30$" />
            </div>
            <div>
              <FeatureCard
                image={img5}
                title="White Comfortable fit"
                price="13$"
              />
            </div>
          </Slider>
        </Container>
      </div>
    );
  }
}

export default ShortSleeves;
