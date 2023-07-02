export default (cart) => {
  const total = cart.reduce((acc, i) => (acc + i.price), 0);

  // Convert to 2 decimal string, and then back to a number.
  return Number(total.toFixed(2));
};