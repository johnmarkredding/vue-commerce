export default (cart) => {
  // Take each product price and quantity to find total for that cart 'item', then pass it on.
  const cartItemsReducer = (acc, i) => {
    return (acc + (i.quantity * i.product.price));
  };
  // Since the cart is an object, take only the values and reduce them to total.
  const total = Object.values(cart).reduce(cartItemsReducer, 0);

  // Convert to 2 decimal string, and then back to a number.
  return Number(total.toFixed(2));
};