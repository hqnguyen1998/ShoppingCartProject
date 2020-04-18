export const addItemToCart = (currentCart, newItem) => {
  // check if item is in cart
  const existItem = currentCart.filter((item) => item.id === newItem.id);

  if (!existItem.length) {
    newItem.quantity = newItem.quantity + 1;
    return [...currentCart, newItem];
  }

  const increaseQuantity = currentCart.filter((item) =>
    item.id === newItem.id ? (item.quantity = item.quantity + 1) : newItem
  );

  return increaseQuantity;
};

export const increaseCartItem = (currentCart, itemId) => {
  return currentCart.filter((item) =>
    item.id === itemId ? (item.quantity = item.quantity + 1) : currentCart
  );
};

export const decreaseCartItem = (currentCart, itemId) => {
  const isCartQuantityIsZero = currentCart.find((item) => item.id === itemId);

  if (isCartQuantityIsZero.quantity === 0) {
    return currentCart.filter((item) => item.id !== itemId);
  }

  return currentCart.filter((item) =>
    item.id === itemId ? (item.quantity = item.quantity - 1) : item
  );
};
