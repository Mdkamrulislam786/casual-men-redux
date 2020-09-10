import {
  ADD_TO_CART,
  HANDLE_DETAILS,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CLEAR_PRODUCT,
  CLEAR_CART,
  MODAL_OPEN,
  MODAL_CLOSE,
  GET_NUMBERS,
} from "./types";

export const addToCart = (id) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload: id,
    });
  };
};

export const handleDetail = (id) => {
  return (dispatch) => {
    dispatch({
      type: HANDLE_DETAILS,
      payload: id,
    });
  };
};

export const increment = (id) => {
  return (dispatch) => {
    dispatch({
      type: INCREASE_QUANTITY,
      payload: id,
    });
  };
};

export const decrement = (id) => {
  return (dispatch) => {
    dispatch({
      type: DECREASE_QUANTITY,
      payload: id,
    });
  };
};

export const removeItem = (id) => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_PRODUCT,
      payload: id,
    });
  };
};

export const clearCart = (id) => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_CART,
      payload: id,
    });
  };
};

export const openModal = (id) => {
  return (dispatch) => {
    dispatch({
      type: MODAL_OPEN,
      payload: id,
    });
  };
};

export const closeModal = (id) => {
  return (dispatch) => {
    dispatch({
      type: MODAL_CLOSE,
      payload: id,
    });
  };
};
export const getNumbers = () => {
  return (dispatch) => {
    dispatch({
      type: GET_NUMBERS,
    });
  };
};
