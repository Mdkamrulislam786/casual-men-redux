import React, { Component } from "react";
import { Container} from "react-bootstrap";
import FeatureCard from "../../../../widgets/ShoppingCards/FeatureCard/FeatureCard";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import AllDressHeader from '../../../../widgets/AllDressHeader/AllDressHeader'
import "./Polos.css";

//Images
import PoloHeader from "../../../../../assets/T-Shirts/Polos/Polo-header.jpg";
import img from "../../../../../assets/T-Shirts/Polos/Black_Polo.jpg";
import img2 from "../../../../../assets/T-Shirts/Polos/RedBlackP.jpg";
import img3 from "../../../../../assets/T-Shirts/Polos/StylishP.jpg";
import img4 from "../../../../../assets/T-Shirts/Polos/black-polo.jpg";
import img5 from "../../../../../assets/T-Shirts/Polos/GP.jpg";
import img6 from "../../../../../assets/T-Shirts/Polos/Grey-Polo.jpg";
import img7 from "../../../../../assets/T-Shirts/Polos/PB.jpg";
import img8 from "../../../../../assets/T-Shirts/Polos/BlueAshP.jpg";
import img9 from "../../../../../assets/polo.jpg";

class Polos extends Component {
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
      <div className="AllTshirts">
       <AllDressHeader
       Image={PoloHeader}
       h1="POLO WILL NEVER GO OUT OF STYLE"
       para="Non incididunt eu duis qui enim deserunt sint qui et occaecat. Ipsum
       occaecat dolor cillum amet sunt. Magna laboris cupidatat aliquip
       culpa nostrud sint in qui eiusmod nisi ea deserunt. Aliqua sunt
       deserunt"
       h2="CHOOSE YOUR FAVOURITE ONE NOW"
       />
        <Container>
          <Slider {...settings}>
            <div>
              <Link
                to="/polos"
                style={{ textDecoration: "none", color: "black" }}
              >
                <FeatureCard image={img} title="Black" price="9$" />
              </Link>
            </div>
            <div>
              <FeatureCard image={img2} title="RedBlack Polo" price="17$" />
            </div>
            <div>
              <FeatureCard
                image={img3}
                title="Light Short Sleeve"
                price="20$"
              />
            </div>
            <div>
              <FeatureCard image={img4} title="Black/Slim Fit" price="30$" />
            </div>
            <div>
              <FeatureCard image={img5} title="Green" price="13$" />
            </div>
            <div>
              <FeatureCard image={img6} title="Grey" price="12.50$" />
            </div>
            <div>
              <FeatureCard image={img7} title="Dark Black" price="28$" />
            </div>
            <div>
              <FeatureCard image={img8} title="Ash+Blue" price="10.77$" />
            </div>
            <div>
              <FeatureCard image={img9} title="White" price="9$" />
            </div>
            <div>
              <FeatureCard
                image={img3}
                title="Light Short Sleeve"
                price="12.99$"
              />
            </div>
          </Slider>
        </Container>
      </div>
    );
  }
}

export default Polos;
