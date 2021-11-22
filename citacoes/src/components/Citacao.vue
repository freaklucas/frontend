<template>
  <div class="citacao">
    <slot name="fonte" />
    <slot name="texto" />
    <slot name="autor" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.citacao {
  border: 1px solid #ddd;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 25px;
  max-width: 450px;
}
</style>
