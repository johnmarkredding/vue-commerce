<template>
  <!-- add shopping cart, currency switcher, search, and category drop down -->
  <!-- <HeaderBar /> -->
  <!-- Hero -->
  <!-- Product list -->
  <!-- Filter -->
  <ProductList :products="products" />
</template>

<script>
// import HeaderBar from './components/HeaderBar.vue';
import ProductList from './components/ProductList.vue';

export default {
  name: 'App',
  components: {
    // HeaderBar,
    ProductList
  },
  data() {
    return {
      products: [
        { id: 1, title: "he", category: "shoes", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!" },
        { id: 2, title: "she", category: "tops", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!" },
        { id: 3, title: "HuH?", category: "shoes", description: "Hey there!" }]
    }
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
