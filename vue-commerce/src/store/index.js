import { defineStore } from 'pinia';
import { totalCart } from '../functions/index.js';

export const useProductsStore = defineStore('products', {
  state: () => ({ products: [] }),
  actions: {
    update(products) {
      this.products = products;
    },
    async fetch() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        this.products = data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
});


export const useCartStore = defineStore('cart', {
  state: () => ({ cart: []}),
  actions: {
    clear() {
      this.cart = [];
    },
    add(product) {
      // Exists in the cart?   If so, add another.                  If not, create an item
      this.cart[product.id] ? (this.cart[product.id].quantity++) : (this.cart[product.id] = {quantity: 1, product});
      console.log(this.cart)
    },
    remove(productId) {
      if (!this.cart[productId]) { // Skip situations where there is no product found in cart.
        return;
      } else if (this.cart[productId].quantity < 2) { // If there's only 1 product (or unexpected '0' case), set item to null.
        this.cart[productId] = null;
      } else {
        this.cart[productId].quantity--;
      }
      console.log(this.cart)
    }
  },
  getters: {
    getTotal: (state) => totalCart(state.cart)
  }
});
