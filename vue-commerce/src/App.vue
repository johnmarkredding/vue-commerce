<template>
  <!-- add shopping cart, currency switcher, search, and category drop down -->
  <!-- <HeaderBar /> -->
  <!-- Hero -->
  <!-- Product list -->
  <!-- Filter -->
  <ProductList :products="productsStore.products" />
</template>

<script setup>
// import HeaderBar from './components/HeaderBar.vue';
import ProductList from './components/ProductList.vue';
import { useProductsStore } from './store';

const productsStore = useProductsStore();

productsStore.fetch();
</script>

<style>
#app {
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
