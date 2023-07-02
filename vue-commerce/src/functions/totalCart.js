export default (cart) => {
  const cartItemsReducer = (acc, i) => {
    return (acc + i.price);
  };
  const total = cart.reduce(cartItemsReducer, 0);

  // Convert to 2 decimal string, and then back to a number.
  return Number(total.toFixed(2));
};