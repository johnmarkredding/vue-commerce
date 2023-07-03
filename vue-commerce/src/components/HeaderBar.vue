<template>
  <header class="card relative z-2">
    <div class="input-text">
      <InputText placeholder="Search" type="text" />
    </div>
    <div id="currency-selector">
      <CurrencySelector :currencyOptions="currencies" />
    </div>
  </header>
</template>

<script setup>
import InputText from 'primevue/inputtext';
import CurrencySelector from './CurrencySelector.vue'
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
  padding: 0.5rem;
  grid-gap: 0.5rem;
  display: grid;
  grid-template-columns: "20% 1fr 20%";
  grid-template-areas: "search . currency";
}

.input-text {
  grid-area: search;
}

#currency-selector {
  grid-area: currency;
}
</style>