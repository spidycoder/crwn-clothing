import CartActionTypes from "./cart.types";
import { addItemToCart } from "./cart.utils";
import { reomveItemToCart } from "./cart.remove";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEMS:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.CLEAR_ITEMS_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (CartItem) => CartItem.id !== action.payload.id
        ),
      };
    case CartActionTypes.REMOVE_ITEMS:
      return {
        ...state,
        cartItems: reomveItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default CartReducer;
