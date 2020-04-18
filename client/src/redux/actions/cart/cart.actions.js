import {
  ADD_ITEM_TO_CART,
  INCREASE_CART_ITEM,
  DECREASE_CART_ITEM,
} from '../../types';

export const addItemToCart = (item) => (dispatch) => {
  dispatch({
    type: ADD_ITEM_TO_CART,
    payload: item,
  });
};

export const increaseCartItem = (itemId) => (dispatch) => {
  dispatch({
    type: INCREASE_CART_ITEM,
    payload: itemId,
  });
};

export const decreaseCartItem = (itemId) => (dispatch) => {
  dispatch({
    type: DECREASE_CART_ITEM,
    payload: itemId,
  });
};
