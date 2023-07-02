<!-- <template>
  <ProductListItem :key="product.id" v-for="product in props.products" :product="product" />
</template> -->

<template>
  <div class="card">
    <DataView :value="props.products" :sortOrder="sortOrder" :sortField="sortField">
      <template #header>
        <Dropdown v-model="sortKey" :options="sortOptions" optionLabel="label" placeholder="Sort By Price"
          @change="onSortChange($event)" />
      </template>
      <template #list="{ data }">
        <ProductListItem :product="data"></ProductListItem>
      </template>
    </DataView>
  </div>
</template>

<script setup>
import ProductListItem from './ProductListItem.vue';
import { defineProps } from 'vue';
import Dropdown from 'primevue/dropdown';
import DataView from 'primevue/dataview';
import { ref } from "vue";

const props = defineProps(['products']);

const sortKey = ref();
const sortOrder = ref();
const sortField = ref();
const sortOptions = ref([
  { label: 'Price High to Low', value: '!price' },
  { label: 'Price Low to High', value: 'price' },
]);
const onSortChange = (event) => {
  const value = event.value.value;
  const sortValue = event.value;

  if (value.indexOf('!') === 0) {
    sortOrder.value = -1;
    sortField.value = value.substring(1, value.length);
    sortKey.value = sortValue;
  } else {
    sortOrder.value = 1;
    sortField.value = value;
    sortKey.value = sortValue;
  }
};

</script>

<style scoped></style>
