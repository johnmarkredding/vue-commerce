<template>
  <header>
    <div class="input-text">
      <InputText placeholder="Search" type="text" />
    </div>
    <div id="currency-selector">
      <CurrencySelector :currencyOptions="currencies" />
    </div>
    <div id="cart-status">
      <CartStatus />
    </div>
  </header>
</template>

<script setup>
import InputText from 'primevue/inputtext';
import CurrencySelector from './CurrencySelector.vue'
import CartStatus from './CartStatus.vue'
import { ref } from 'vue'

const currencies = ref([
  { label: "US Dollar", code: "USD", name: "🇺🇲 $" },
  { label: "Euro", code: "EUR", name: "🇪🇺 €" },
  { label: "British Pound", code: "GBP", name: "🇬🇧 £" },
  // Add more currency options as needed
]);

</script>

<style scoped>
header {
  width: 100%;
  grid-area: header;
  grid-gap: 0.5rem;
  display: grid;
  grid-template-areas: "search currency cart";
  grid-template-columns: 25% 1fr 10%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.input-text {
  width: 100%;
  grid-area: search;
  justify-self: left;
  margin-left: 0.5rem;
}

#currency-selector {
  grid-area: currency;
  justify-self: right;
  margin-right: 0.5rem;
}

#cart-status {
  width: 100%;
  grid-area: cart;
  justify-self: center;
  align-self: center;
}
</style>