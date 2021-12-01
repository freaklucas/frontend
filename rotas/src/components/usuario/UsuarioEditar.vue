<template>
  <div class="usuario-editar">
    <h3>Usuário Editar</h3>
    <p>
      <strong>Código: </strong>
      {{ id }}
    </p>
    <p>
      <strong>Código de confirmação: </strong>
      {{ $route.params.id }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["id"],
};
</script>

<style>
</style>