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
const props = defineProps(['products']);
</script>

<style scoped>
.card {
  display: grid;
}
</style>
