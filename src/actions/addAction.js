import {
  ADD_TO_CART,
  HANDLE_DETAILS,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CLEAR_PRODUCT,
  CLEAR_CART,
  MODAL_OPEN,
  MODAL_CLOSE,
} from "./types";

export const addToCart = (id) => {
  return (dispatch) => {
    console.log("add to basket");
    console.log("Product: ", id);

    dispatch({
      type: ADD_TO_CART,
      payload: id,
    });
  };
};

export const handleDetail = (id) => {
  return (dispatch) => {
    console.log("handle details of");
    console.log("ProductID: ", id);

    dispatch({
      type: HANDLE_DETAILS,
      payload: id,
    });
  };
};

export const increment = (id) => {
  return (dispatch) => {
    console.log("increment");
    console.log("ProductID: ", id);

    dispatch({
      type: INCREASE_QUANTITY,
      payload: id,
    });
  };
};

export const decrement = (id) => {
  return (dispatch) => {
    console.log("decrement");
    console.log("ProductID: ", id);

    dispatch({
      type: DECREASE_QUANTITY,
      payload: id,
    });
  };
};

export const removeItem = (id) => {
  return (dispatch) => {
    console.log("removed");
    console.log("ProductID: ", id);

    dispatch({
      type: CLEAR_PRODUCT,
      payload: id,
    });
  };
};

export const clearCart = (id) => {
  return (dispatch) => {
    console.log("removed");
    console.log("ProductID: ", id);

    dispatch({
      type: CLEAR_CART,
      payload: id,
    });
  };
};

export const openModal = (id) => {
  return (dispatch) => {
    console.log("modal opened");
    console.log("ProductID: ", id);

    dispatch({
      type: MODAL_OPEN,
      payload: id,
    });
  };
};

export const closeModal = (id) => {
  return (dispatch) => {
    console.log("modal closed");
    console.log("ProductID: ", id);

    dispatch({
      type: MODAL_CLOSE,
      payload: id,
    });
  };
};
