<template>
  <div class="citacoes">
    <span>
      <button @click="numero--">&lt;</button>
      <button @click="numero++">&gt;</button>
    </span>
    <Citacao>
      <h1 slot="fonte">{{ citacoes[indice].fonte }}</h1>
      <p slot="texto">{{ citacoes[indice].texto }}</p>
      <h6 slot="autor">{{ citacoes[indice].autor }}</h6>
    </Citacao>
  </div>
</template>

<script>
import Citacao from "./Citacao.vue";

export default {
  components: { Citacao },
  data() {
    return {
      numero: 0,
      citacoes: [
        {
          fonte: "Frases Motivacionais",
          texto: "A persistência é o caminho do êxito..",
          autor: "- Charles Chaplin",
        },
        {
          fonte: "Frases de Músicas",
          texto:
            "Eu faço da dificuldade a minha motivação. A volta por cima vem na continuação..",
          autor: "- Charlie Brown Jr",
        },
        {
          fonte: "Frases de Pensador",
          texto:
            "Você precisa fazer aquilo que pensa que não é capaz de fazer.",
          autor: "- Eleanor Roosevelt",
        },
      ],
    };
  },
  computed: {
    indice() {
      return Math.abs(this.numero % 3);
    },
  },
};
</script>

<style scoped>
.citacoes {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 12px;
}
</style>
