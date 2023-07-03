<script setup>
import { useCartStore } from '../store';
const cartStore = useCartStore();
</script>

<template>
  <i v-badge.danger="cartStore.getCount()" class="pi pi-shopping-cart p-overlay-badge" style="font-size: 1.25rem" />
  <p>${{ cartStore.getTotal() }}</p>
</template>

<style scoped></style>