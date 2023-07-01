<template>
  <!-- add shopping cart, currency switcher, search, and category drop down -->
  <HeaderBar />
  <!-- Hero -->
  <!-- Product list -->
  <!-- Filter -->
</template>

<script>
import HeaderBar from './components/HeaderBar.vue';

export default {
  name: 'App',
  components: {
    HeaderBar
  },
  data() {
  },
}
</script>

<style>
#app {
  font-family: var(--font-family);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
