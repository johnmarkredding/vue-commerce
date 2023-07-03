export default async function fetchFakeApi() {
  return await fetch('https://fakestoreapi.com/products');
}