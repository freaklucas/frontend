export default {
  state: {
    produtos: [],
  },
  getters: {
    valorTotal(state) {
      return state.produtos
        .map((p) => p.quantidade * p.preco)
        .reduce((total, atual) => total + atual, 0);
    },
  },
  mutations: {
    // seters -> alterar o estado central
    adicionarProduto(state, payload) {
      state.produtos.push(payload);
    },
  },
  actions: {
    adicionarProduto(context, payload) {
      setTimeout(() => {
        context.commit("adicionarProduto", payload);
      }, 1000);
    },
  },
};
