<script setup>
import Button from 'primevue/button';
import { defineProps } from 'vue';
import { useCartStore } from '@/store';
const props = defineProps(['product']);
const cartStore = useCartStore();
</script>

<template>
  <li>
    <img alt="product header" :src="`${props.product.image}`" />
    <h3> {{ props.product.title }} </h3>
    <div role="doc-subtitle"> {{ props.product.category }}</div>
    <p>${{ props.product.getPriceString() }}</p>
    <footer>
      <Button @click="(e) => { cartStore.add(props.product) }" icon="pi pi-shopping-cart" label="Add" severity="danger"
        aria-label="Add to cart" rounded />
      <Button @click="() => { console.log(`Implement ProductView! Show more`); }" icon="pi pi-search" label="More" text
        aria-label="See more" rounded />
    </footer>
  </li>
</template>

<style scoped>
li {
  list-style-type: none;
  max-width: 35rem;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 2px 1px #ddd;
}

li:hover {
  box-shadow: 0 1px 1.5rem 0px #aaa;
  z-index: 500;
}

img {
  max-height: 10rem;
  width: auto;
  height: auto;
}

Button:first-of-type {
  margin-right: .5rem;
}

p {
  line-height: 168%;
}

[role="doc-subtitle"] {}
</style>
