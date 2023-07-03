import { defineStore } from 'pinia';
import { totalItems } from '../functions';

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
  state: () => ({ cart: {}}),
  actions: {
    clear() {
      this.cart = {};
    },
    add(product) {
      // Exists in the cart?   If so, add another.                  If not, create an item
      this.cart[product.id] ? (this.cart[product.id].quantity++) : (this.cart[product.id] = {quantity: 1, product});
    },
    remove(productId) {
      if (!this.cart[productId]) { return; } // Skip situations where product is not in cart.
      
      // If there's only 1 product (or unexpected '0' case), set item to null.
      if (this.cart[productId].quantity <= 1) {
        delete this.cart[productId];
      } else {
        this.cart[productId].quantity--;
      }
    }
  },
  getters: {
    getTotal: (state) => totalItems(Object.values(state.cart))
  }
});
