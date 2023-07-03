export default function formatPrice (price) {
  const newPrice = Number(price);
  return ((newPrice % 1) > 0) ? newPrice.toFixed(2) : String(newPrice);
}