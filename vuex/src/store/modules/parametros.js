export default {
  state: {
    quantidade: 1,
    preco: 0.99,
  },
  mutations: {
    // seters -> alterar o estado central
    setQuantidade(state, payload) {
      state.quantidade = payload;
    },
    setPreco(state, payload) {
      state.preco = payload;
    },
  },
};
