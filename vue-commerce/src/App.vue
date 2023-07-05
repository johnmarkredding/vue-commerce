<template>
  <!-- add shopping cart, currency switcher, search, and category drop down -->
  <!-- Hero -->
  <!-- Product list -->
  <!-- Filter -->
  <HomeView>
    <HeaderBar />
  </HomeView>
  <CartView />
</template>

<script setup>
import HeaderBar from '@/components/HeaderBar.vue';
import HomeView from '@/views/HomeView.vue';
import CartView from '@/views/CartView.vue';
</script>

<style>
#app {
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #d4e5f6;
}

img {
  user-select: none;
}
</style>
