<template>
  <div id="app">
    <h1>Filtros & Mixins</h1>
    <hr />
    <p>{{ usuarioLogado }}</p>
    <p>{{ cpfAluno | cpf | inverter }}</p>
    <hr />
    <h1>Filtro de telefone</h1>
    <p>{{ tel | number }}</p>
    <br />
    <input type="text" :value="cpfAluno" />
    <br />
    <Frutas />
    <hr />
    <div>
      <ul>
        <li v-for="fruta in frutas" :key="fruta">
          {{ fruta }}
        </li>
      </ul>
      <input type="text" v-model="fruta" @keydown.enter="addElementosLista" />
    </div>
  </div>
</template>

<script>
import Frutas from "./Frutas.vue";
import frutasMixin from "./frutasMixin";
import usuarioMixin from "./usuarioMixin";

export default {
  components: {
    Frutas,
  },
  mixins: [frutasMixin, usuarioMixin],
  filters: {
    cpf(valor) {
      const arr = valor.split("");
      arr.splice(3, 0, ".");
      arr.splice(7, 0, ".");
      arr.splice(11, 0, "-");

      return arr.join("");
    },
    number(val) {
      const arr = val.split("");
      arr.splice(2, 0, ".");
      arr.splice(10, 0, "-");

      return arr.join("");
    },
  },
  data() {
    return {
      cpfAluno: "70444741200",
      tel: "64993420591",
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}

input {
  font-size: 2.5rem;
  color: #2c3e50;
}
</style>
