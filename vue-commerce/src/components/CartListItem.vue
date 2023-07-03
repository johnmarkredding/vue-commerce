<script setup>
import Card from 'primevue/card';
import Badge from 'primevue/badge';
import Button from 'primevue/button';
import { useCartStore } from '../store';
import { formatPrice } from '../functions';
import { defineProps } from 'vue';

const cartStore = useCartStore();
const props = defineProps(['item']);
</script>

<template>
  <li :key="props.item.product.id">
    <Card style="padding-top:1rem">
      <template #header>
        <img alt="product header" :src="`${props.item.product.image}`" />
      </template>
      <template #title> {{ props.item.product.title }} </template>
      <template #subtitle> {{ props.item.product.category }} <p>${{ formatPrice(props.item.product.price) }}</p>
      </template>
      <template #footer>
        <Button @click="(e) => { cartStore.add(props.item.product) }" icon="pi pi-plus" aria-label="Add to cart"
          rounded />
        <Badge :value="props.item.quantity" size="large" severity="danger"></Badge>
        <Button @click="(e) => { cartStore.remove(props.item.product.id) }" icon="pi pi-minus"
          aria-label="Remove from cart" outlined rounded />
      </template>
    </Card>
  </li>
</template>

<style scoped>
li {
  list-style-type: none;
  display: block;
  margin: auto;
  max-width: 35rem;
  margin-top: 1rem;
}

img {
  max-height: 10rem;
  width: auto;
  height: auto;
}

Button:first-of-type {
  margin-right: .5rem;
}

Button:nth-of-type(2) {
  margin-left: .5rem;
}

p {
  line-height: 168%;
}
</style>