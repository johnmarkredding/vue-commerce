<script setup>
import ProductListItem from './ProductListItem.vue';
import { defineProps } from 'vue';
const props = defineProps(['products']);
</script>

<template>
  <!-- Grid Setup with Slots for placing items within -->
  <section>
    <ul>
      <ProductListItem :key="product.id" v-for="product in props.products" :product="product" />
    </ul>
  </section>
</template>

<style scoped></style>
