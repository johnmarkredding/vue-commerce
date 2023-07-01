<template>
  <div class="hello">
    <Dropdown v-model="selectedCurrency" :options="currencyOptions" optionLabel="name" placeholder="Select a Currency"
      class="w-full md:w-14rem">
      <template #value="slotProps">
        <div v-if="slotProps.value" class="flex align-items-center">
          <div>{{ `${slotProps.value.name} ${slotProps.value.code}` }}</div>
        </div>
        <span v-else>
          {{ slotProps.placeholder }}
        </span>
      </template>
      <template #option="slotProps">
        <div class="flex align-items-center">
          <div>{{ `${slotProps.option.name} ${slotProps.option.code}` }}</div>
        </div>
      </template>
    </Dropdown>
  </div>
</template>

<script>
import Dropdown from "primevue/dropdown"

export default {
  name: 'CurrencySelector',
  props: {
    currencyOptions: Array
  },
  data() {
    return {
      selectedCurrency: { label: "US Dollar", code: "USD", name: "🇺🇲 $" },
    };
  },
  components: {
    Dropdown
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
