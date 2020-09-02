import React, { Fragment } from "react";
import EmptyCart from "./EmptyCart/EmptyCart";
import CartList from "./CartList/CartList";
import CartColumns from "./CartColumns/CartColumns";
import CartTotals from "./CartTotals/CartTotals";
import "./Cart.css";
//REDUX
import { connect } from "react-redux";

const Cart = (props) => {
  const { cart } = props.basketProps;
  const showCart = () => {
    if (cart.length > 0) {
      return (
        <Fragment>
          <div>
            <h2
              style={{
                textAlign: "center",
                marginTop: "30px",
                marginBottom: "20px",
                fontFamily: "Robotto",
              }}
            >
              Your Cart
            </h2>
          </div>
          <CartColumns />
          <CartList value={props.basketProps} />
          <CartTotals value={props.basketProps} />
        </Fragment>
      );
    } else {
      return <EmptyCart />;
    }
  };
  return <section>{showCart()}</section>;
};
const mapStateToProps = (state) => ({
  basketProps: state.basketState,
});

export default connect(mapStateToProps, null)(Cart);
