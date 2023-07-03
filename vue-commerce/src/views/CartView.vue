<template>
  <section>
    <h2>${{ formatPrice(cartStore.getTotal()) }}</h2>
    <slot>
      <CartList />
    </slot>
  </section>
</template>

<script setup>
import CartList from '../components/CartList.vue';
import { formatPrice } from '../functions';
import { useCartStore } from '../store';

const cartStore = useCartStore();
</script>

<style scoped></style>