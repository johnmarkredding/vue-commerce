<template>
  <section>
    <slot></slot>
  </section>
</template>

<script setup>

</script>

<style scoped>
section {
  display: grid;
  grid-template-columns: 25% 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "header header header"
    "sidebar body body";
}
</style>