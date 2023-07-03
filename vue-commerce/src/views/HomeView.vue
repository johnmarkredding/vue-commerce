<template>
  <section>
    <slot></slot>
    <FilterSelector />
    <ProductList :products="productsStore.products" />
  </section>
</template>

<script setup>
import ProductList from '../components/ProductList.vue';
import FilterSelector from '../components/FilterSelector.vue';
import { useProductsStore } from '../store';

const productsStore = useProductsStore();

productsStore.fetch();
</script>

<style scoped>
section {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "header header header header"
    "sidebar body body body";
}
</style>