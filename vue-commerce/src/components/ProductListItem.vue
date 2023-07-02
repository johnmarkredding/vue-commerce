<script setup>
import Card from 'primevue/card';
import Button from 'primevue/button';
import { defineProps } from 'vue';
const props = defineProps(['product']);
</script>

<template>
  <li :key="props.product.id">
    <Card style="width: 25rem">
      <template #header>
        <img alt="product header" :src="`${props.product.image}`" />
      </template>
      <template #title> {{ props.product.title }} </template>
      <template #subtitle> {{ props.product.category }} {{ props.product.price }}</template>
      <template #content>
        <p>
          {{ props.product.description }}
        </p>
      </template>
      <template #footer>
        <Button icon="pi pi-shopping-cart" label="Add" severity="danger" rounded aria-label="Add to cart" />
        <Button icon="pi pi-search" label="More" text rounded aria-label="See more" />
      </template>
    </Card>
  </li>
</template>

<!-- <template>
  <div class="col-12">
    <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
      <img class="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" :src="`${props.product.image}`"
        :alt="props.product.name" />
      <div
        class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
        <div class="flex flex-column align-items-center sm:align-items-start gap-3">
          <div class="text-2xl font-bold text-900">{{ props.product.name }}</div>
          <Rating :modelValue="props.product.rating" readonly :cancel="false"></Rating>
          <div class="flex align-items-center gap-3">
            <span class="flex align-items-center gap-2">
              <i class="pi pi-tag"></i>
              <span class="font-semibold">{{ props.product.category }}</span>
            </span>
            <Tag :value="props.product.inventoryStatus" :severity="getSeverity(product)"></Tag>
          </div>
        </div>
        <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
          <span class="text-2xl font-semibold">${{ props.product.price }}</span>
          <Button icon="pi pi-shopping-cart" rounded :disabled="props.product.inventoryStatus === 'OUTOFSTOCK'"></Button>
        </div>
      </div>
    </div>
  </div>
</template> -->

<style scoped>
li {
  list-style-type: none;
  display: inline-block;
}

img {
  max-height: 10rem;
}

Button:first-of-type {
  margin-right: .5rem;
}
</style>
