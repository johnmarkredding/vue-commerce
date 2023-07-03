<script setup>
import Card from 'primevue/card';
import Button from 'primevue/button';
import { defineProps } from 'vue';
import { useCartStore } from '../store';
const props = defineProps(['product']);
const cartStore = useCartStore();
</script>

<template>
  <li>
    <Card>
      <template #header>
        <img alt="product header" :src="`${props.product.image}`" />
      </template>
      <template #title> {{ props.product.title }} </template>
      <template #subtitle> {{ props.product.category }} <p>${{ props.product.getPriceString() }}</p></template>
      <template #footer>
        <Button @click="(e) => { cartStore.add(props.product) }" icon="pi pi-shopping-cart" label="Add" severity="danger"
          aria-label="Add to cart" rounded />
        <Button @click="() => { console.log(`Implement ProductView! Show more`); }" icon="pi pi-search" label="More" text
          aria-label="See more" rounded />
      </template>
    </Card>
  </li>
</template>

<style scoped>
li {
  list-style-type: none;
  display: grid;
  max-width: 35rem;
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
</style>
