<template>
  <div id="app">
    <h1>Registrar Reclamação</h1>
    <div class="conteudo">
      <form class="painel" v-if="!enviado">
        <div class="cabecalho">Formulário</div>
        <Rotulo nome="E-mail">
          <input v-model.lazy.trim="usuario.email" type="text" />
        </Rotulo>
        <Rotulo nome="Senha">
          <input v-model="usuario.senha" type="password" />
        </Rotulo>
        <Rotulo nome="Idade">
          <input v-model="usuario.idade.number" type="number" />
        </Rotulo>
        <Rotulo nome="Mensagem">
          <textarea name="" cols="30" rows="5" v-model="mensagem"></textarea>
        </Rotulo>
        <Rotulo nome="Características do Problema">
          <span class="mr-4"
            ><input
              v-model="caracteristicas"
              type="checkbox"
              value="Reproduzivel"
            />
            Reproduzível</span
          >
          <span
            ><input
              v-model="caracteristicas"
              type="checkbox"
              value="Intermitente"
            />
            Intermitente</span
          >
        </Rotulo>
        <Rotulo nome="Qual produto?">
          <span class="mr-4"
            ><input type="radio" value="Web" v-model="produto" /> Web</span
          >
          <span class="mr-4"
            ><input type="radio" value="Mobile" v-model="produto" />
            Mobile</span
          >
          <span
            ><input type="radio" value="Outro" v-model="produto" /> Outro</span
          >
        </Rotulo>
        <Rotulo nome="Prioridade">
          <select v-model="prioridade">
            <option
              v-for="prioridade in prioridades"
              :key="prioridade.codigo"
              :value="prioridade.codigo"
              :selected="prioridade.codigo === 2"
            >
              {{ prioridade.codigo }} - {{ prioridade.nome }}
            </option>
          </select>
        </Rotulo>
        <Rotulo nome="Primeira Reclamação?">
          <Escolha v-model="escolha" />
        </Rotulo>
        <hr />
        <button @click.prevent="enviar">Enviar</button>
      </form>
      <div class="painel" v-else>
        <div class="cabecalho">Resultado</div>
        <Rotulo nome="E-mail">
          <span>{{ usuario.email }}</span>
        </Rotulo>
        <Rotulo nome="Senha">
          <span>{{ usuario.senha }}</span>
        </Rotulo>
        <Rotulo nome="Idade">
          <span>{{ usuario.idade }}</span>
        </Rotulo>
        <Rotulo nome="Mensagem">
          <span style="white-space: pre">{{ mensagem }}</span>
        </Rotulo>
        <Rotulo nome="Marque as Opções">
          <span>
            <ul>
              <li
                v-for="caract in caracteristicas"
                :key="caract"
                style="white-space: line"
              >
                {{ caract }}
              </li>
            </ul>
          </span>
        </Rotulo>
        <Rotulo nome="Qual produto?">
          <span>{{ produto }}</span>
        </Rotulo>
        <Rotulo nome="Prioridade">
          <span>{{ prioridade }}</span>
        </Rotulo>
        <Rotulo nome="Primeira Reclamação?">
          <span>{{ escolha }}</span>
        </Rotulo>
      </div>
    </div>
  </div>
</template>

<script>
import Rotulo from "./components/Rotulo.vue";
import Escolha from "./components/Escolha.vue";

export default {
  name: "app",
  components: { Rotulo, Escolha },
  methods: {
    enviar() {
      this.enviado = true;
    },
  },
  data() {
    return {
      mensagem: "",
      caracteristicas: [],
      produto: "web",
      prioridade: 2,
      prioridades: [
        { codigo: 1, nome: "Baixa" },
        { codigo: 2, nome: "Moderada" },
        { codigo: 3, nome: "Alta" },
      ],
      usuario: {
        email: "",
        senha: "",
        idade: 25,
      },
      escolha: true,
      enviado: false,
    };
  },
};
</script>

<style>
body {
  background-color: #ececec;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
}

.conteudo {
  display: flex;
}

.painel {
  flex: 1;
  background: #fff;
  margin: 0px 10px;
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
}

.painel .cabecalho {
  width: 100%;
  background-color: #ddd;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 1.4rem;
}

#app form button {
  float: right;
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}

#app h1 {
  font-weight: 200;
  margin: 20px;
  padding: 0;
}

.mr-4 {
  margin-right: 40px;
}
</style>
