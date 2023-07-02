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
    add(item) {
      this.cart = [...this.cart, item];
    },
    remove(itemId) {
      this.cart = this.cart.filter((i)=>i.id != itemId);
    }
  },
  getters: {
    getTotal: (state) => totalCart(state.cart),
    getCart: (state) => state.cart
  }
});
