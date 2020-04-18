import {
  ADD_ITEM_TO_CART,
  INCREASE_CART_ITEM,
  DECREASE_CART_ITEM,
} from '../../types';
import {
  addItemToCart,
  increaseCartItem,
  decreaseCartItem,
} from './cart.ultils';

const initialState = {
  currentCart: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        currentCart: addItemToCart(state.currentCart, payload),
        isLoading: false,
      };
    case INCREASE_CART_ITEM:
      return {
        ...state,
        currentCart: increaseCartItem(state.currentCart, payload),
        isLoading: false,
      };
    case DECREASE_CART_ITEM:
      return {
        ...state,
        currentCart: decreaseCartItem(state.currentCart, payload),
        isLoading: false,
      };
    default:
      return state;
  }
};
