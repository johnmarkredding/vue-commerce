<template>
  <div class="card">
    <CartListItem :key="item.id" v-for="item in cartStore.cart" :item="item" />
  </div>
</template>

<script setup>
import CartListItem from './CartListItem.vue';
import { useCartStore } from '../store';

const cartStore = useCartStore();
</script>

<style scoped>
.card {
  display: grid;
}
</style>
