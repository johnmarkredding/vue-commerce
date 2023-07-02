<script setup>
import Card from 'primevue/card';
import Button from 'primevue/button';
import { defineProps } from 'vue';
const props = defineProps(['product']);

</script>

<template>
  <li :key="props.product.id">
    <Card style="padding-top:1rem">
      <template #header>
        <img alt="product header" :src="`${props.product.image}`" />
      </template>
      <template #title> {{ props.product.title }} </template>
      <template #subtitle> {{ props.product.category }} <p>${{ props.product.price }}</p></template>
      <template #content>
        <p>
          {{ props.product.description }}
        </p>
      </template>
      <template #footer>
        <Button icon="pi pi-shopping-cart" label="Add" severity="danger" rounded aria-label="Add to cart" />
        <Button icon="pi pi-search" label="More" text rounded aria-label="See more" />
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

p {
  line-height: 168%;
}
</style>
