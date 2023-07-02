<script setup>
import Card from 'primevue/card';
import Button from 'primevue/button';
import { defineProps } from 'vue';
const props = defineProps(['product']);
</script>

<template>
  <li :key="props.product.id">
    <Card style="width: 25em">
      <template #header>
        <img alt="user header" :src="props.product.image" />
      </template>
      <template #title> {{ props.product.title }} </template>
      <template #subtitle> {{ props.product.category }} {{ props.product.price }}</template>
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
  display: inline-block;
}

Button:first-of-type {
  margin-right: .5rem;
}
</style>
