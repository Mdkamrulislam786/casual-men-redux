import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Product from "./Product";
import AllDressHeader from "../../widgets/AllDressHeader/AllDressHeader";

//REDUX
import { connect } from "react-redux";
import { addToCart } from "../../../actions/addAction";
//Images
import ShirtHeader from "../../../assets/Shirts/header-new.jpg";

class ProductList extends Component {
  render() {
    let size = 8;
    let first8Items = this.props.basketProps.products.slice(0, size);
    return (
      <div>
        <Container style={{ padding: "30px" }}>
          <AllDressHeader
            Image={ShirtHeader}
            h1="SHIRTS FOR MEN"
            para="Id adipisicing elit adipisicing Lorem. Laborum deserunt laboris ex aliqua deserunt ipsum irure culpa pariatur in esse esse quis. Laboris incididunt enim velit reprehenderit irure. Do est deserunt sint."
            h2="CHOOSE YOUR FAVOURITE SHIRT NOW"
          />
          <Row>
            {first8Items.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});
export default connect(mapStateToProps, { addToCart })(ProductList);
