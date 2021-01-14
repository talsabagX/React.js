import CartActionTypes from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";
const initialState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...prevState,
        hidden: !prevState.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...prevState,
        cartItems: addItemToCart(prevState.cartItems, action.payload),
      };
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...prevState,
        cartItems: prevState.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...prevState,
        cartItems: removeItemFromCart(prevState.cartItems, action.payload),
      };
    default:
      return prevState;
  }
};

export default cartReducer;
