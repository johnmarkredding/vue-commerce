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
  grid-template-areas:
    "header header header"
    "sidebar body body";
}
</style>