<template>
  <div class="usuario">
    <h2>Seção inicial de Usuário</h2>
    <hr />
    <router-view />
    <button sucesso @click="irParaInicio">Voltar</button>
  </div>
</template>

<script>
export default {
  props: ["id"],

  methods: {
    irParaInicio() {
      this.$router.push("/");
      // this.$router.push({ path: "/"});
      // this.$router.push({ name: "inicio" });
    },
  },
};
</script>

<style>
</style>