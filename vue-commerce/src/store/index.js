import { defineStore } from 'pinia';
import { cartTotal } from '../functions';

export const useProductsStore = defineStore('products', {
  state: () => ({ products: [] }),
  actions: {
    update(products) {
      this.products = products;
    },
  },
});
export const useCartStore = defineStore('cart', {
  state: () => ({ cart: []}),
  actions: {
    update(items) {
      this.cart = items;
    },
    add(item) {
      this.cart = [...this.cart, item];
    }
  },
  getters: {
    getPrice: (state) => cartTotal(state.cart)
  }
});
