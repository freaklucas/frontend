import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
   products: [],
   productsInBag: [],
  },
  getters: {
  },
  mutations: {
    loadProducts(state, products) {
      state.products = products;
    },
    loadProductsBag(state, products) {
      state.productsInBag = products;
    },
    addToBag(state, product) {
      state.productsInBag.push(product);
      localStorage.
        setItem("productsInBag", JSON.
          stringify(state.productsInBag));
    },
    removeFromBag(state, productId) {
      let updatedBag = state.productsInBag
        .filter(item => item.id != productId );
      
      state.productsInBag = updatedBag;
      
      localStorage.
        setItem("productsInBag", JSON.
          stringify(state.productsInBag));
    }
  },
  actions: {
    loadProducts({ commit }) {
      axios
      .get('https://fakestoreapi.com/products')
      .then(res => {
        commit('loadProducts', res.data);
      });
    },

    loadProductsBag({ commit }) {
      if (localStorage.getItem("productsInBag")) {
        commit('loadProductsBag', 
          JSON.parse(localStorage.getItem("productsInBag")));
      }
    },

    addToBag({ commit }, product) {
      commit('addToBag', product);
    },
    removeFromBag({commit}, productId) {
      if (confirm('Deseja remover o item?')) {
        commit('removeFromBag', productId);
      }

    }
  },  
  modules: {
  }
});
