export default function filterProducts (filters, products) {
  const checkFilters = (prod) => filters.every(fil => prod[fil[0]] != fil[1]);
  
  return products.filter(checkFilters);
}