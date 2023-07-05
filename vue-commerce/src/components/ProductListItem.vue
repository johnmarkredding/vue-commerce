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
    <div role="doc-subtitle"><span> {{ props.product.category }} </span><span>${{ props.product.getPriceString() }}</span>
    </div>
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
  box-shadow: 0 1px 2px 1px #ddd;
  padding: 1rem 1.5rem;
  display: grid;
  grid-template-areas:
    "image"
    "title"
    "subtitle"
    "footer";
}

li:hover {
  box-shadow: 0 1px 1.5rem 0px #aaa;
  z-index: 500;
}

img {
  max-height: 10rem;
  width: auto;
  height: auto;
  grid-area: image;
}

h3 {
  grid-area: title;
  margin: 1rem 0 0.5rem 0;
  text-align: left;
}

div[role="doc-subtitle"] {
  margin: 0.5rem 0 2rem 0;
  grid-area: subtitle;
}

div[role="doc-subtitle"]>span {
  float: left;
  width: 50%;
  display: block;
  color: #888;
}

div[role="doc-subtitle"]>span:first-of-type {
  text-align: left;
}

div[role="doc-subtitle"]>span:last-of-type {
  text-align: right;
}

footer {
  height: 100%;
  grid-area: footer;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: flex-end;
}
</style>
