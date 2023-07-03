<template>
  <ul id="product-grid">
    <ProductListItem :key="product.id" v-for="product in props.products" :product="product" />
  </ul>
</template>

<script setup>
import ProductListItem from './ProductListItem.vue';
import { defineProps } from 'vue';
const props = defineProps(['products']);
</script>

<style scoped>
#product-grid {
  grid-area: body;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 1rem;
}
</style>
