import { storeProducts, detailProduct } from "../data";
import {
  ADD_TO_CART,
  HANDLE_DETAILS,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  CLEAR_PRODUCT,
  CLEAR_CART,
  MODAL_OPEN,
  MODAL_CLOSE,
} from "../actions/types";

const initialState = {
  products: [...storeProducts],
  detailProduct,
  cart: [],
  modalOpen: false,
  modalProduct: detailProduct,
  open: true,
  cartSubTotal: 0,
  cartTax: 0,
  cartTotal: 0,
};

export default (state = initialState, action) => {
  let id = action.payload;
  //gets the item depending on id=action.payload
  let getItem = (id) => {
    const product = state.products.find((item) => item.id === id); //returns item that meets the condition
    return product;
  };
  //remove
  let removeItem = (id) => {
    let tempProducts = [...state.products];
    let tempCartRmv = [...state.cart];
    tempCartRmv = tempCartRmv.filter((item) => {
      return item.id !== id;
    });

    const index = tempProducts.indexOf(getItem(id));
    let removeProduct = tempProducts[index];
    removeProduct.inCart = false;
    removeProduct.count = 0;
    removeProduct.total = 0;
    return {
      ...state,
      cart: [...tempCartRmv],
      products: [...tempProducts],
    };
  };

  switch (action.type) {
    case HANDLE_DETAILS:
      const products = getItem(id);
      return {
        ...state,
        detailProduct: products,
      };
    case ADD_TO_CART:
      let tempProducts = [...state.products];
      const index = tempProducts.indexOf(getItem(id));
      let product = tempProducts[index];
      product.inCart = true;
      product.count = 1;
      const price = product.price;
      product.total = price;
      return {
        ...state,
        products: tempProducts,
        cart: [...state.cart, product],
      };
    case INCREASE_QUANTITY:
      let tempCart = [...state.cart];
      const selectedProduct = tempCart.find((item) => item.id === id);
      const indexOf = tempCart.indexOf(selectedProduct);
      const productInc = tempCart[indexOf];
      productInc.count = productInc.count + 1;
      productInc.total = productInc.count * productInc.price;
      return {
        ...state,
        cart: [...tempCart],
        cartTotal: productInc.total,
      };
    case DECREASE_QUANTITY:
      //decreasse
      let tempCartDecrese = [...state.cart];
      const selectedProductDecrease = tempCartDecrese.find(
        (item) => item.id === id
      );
      const indexDecrease = tempCartDecrese.indexOf(selectedProductDecrease);
      const productDecrease = tempCartDecrese[indexDecrease];
      productDecrease.count = productDecrease.count - 1;

      if (productDecrease.count === 0) {
        return removeItem(id);
      } else {
        productDecrease.total = productDecrease.count * productDecrease.price;
      }

      return {
        ...state,
        cart: [...tempCartDecrese],
        cartTotal: productDecrease.total,
      };
    case CLEAR_PRODUCT:
      return removeItem(id);
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    case MODAL_OPEN:
      const productModal = getItem(id);
      return {
        ...state,
        modalProduct: productModal,
        modalOpen: true,
      };
    case MODAL_CLOSE:
      return {
        ...state,
        modalOpen: false,
      };
    default:
      return state;
  }
};
