import formatPrice from "./formatPrice";

export default function createProduct (propertyObj) {
  const newProduct = {...propertyObj};
  newProduct.getPriceString = function  () {
    return formatPrice(this.price);
  }
  return newProduct;
}