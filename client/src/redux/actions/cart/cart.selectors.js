import { createSelector } from 'reselect';

const cart = (state) => state.cart;

export const selectCart = createSelector([cart], (cart) => cart.currentCart);

export const selectTotalItems = createSelector([selectCart], (cart) =>
  cart.reduce((accum, cart) => accum + cart.quantity, 0)
);

export const selectTotalPrice = createSelector([selectCart], (cart) =>
  cart.reduce((accum, current) => accum + current.price * current.quantity, 0)
);
