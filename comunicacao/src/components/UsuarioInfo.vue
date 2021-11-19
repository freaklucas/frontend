<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>
      Nome do usuario: <strong>{{ inverterNome() }}</strong>
    </p>
    <p>
      Idade do usuario: <strong>{{ idade }}</strong>
    </p>
    <button @click="reiniciarNome">Reiniciar nome</button>
    <button @click="reiniciarFn">Reiniciar nome(Callack)</button>
  </div>
</template>

<script>
import bus from "@/bus.js";

export default {
  props: {
    nome: {
      type: String,
      required: true,
      //  default: 'default na props'
    },
    reiniciarFn: Function,
    idade: Number,
  },
  methods: {
    inverterNome() {
      return this.nome.split("").reverse().join("");
    },
    reiniciarNome() {
      this.nome = "Lucas Oliveira";
      this.$emit("nomeMudou", this.nome);
    },
  },
  created() {
    bus.quandoIdadeMudar((idade) => {
      this.idade = idade;
    });
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
