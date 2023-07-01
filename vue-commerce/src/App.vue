<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- Can pass GBP, EUR, USD, CHF -->
  <CurrencySelector currency="GBP" />
</template>

<script>
import CurrencySelector from './components/CurrencySelector.vue'

export default {
  name: 'App',
  components: {
    CurrencySelector
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
