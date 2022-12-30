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
    addToBag(state, product) {
      state.productsInBag.push(product);
    },
    removeFromBag(state, productId) {
      let updatedBag = state.productsInBag
        .filter(item => item.id != productId );
      
      state.productsInBag = updatedBag;
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

    addToBag({ commit }, product) {
      commit('addToBag', product);
    },
    removeFromBag({commit}, productId) {
      commit('removeFromBag', productId);

    }
  },  
  modules: {
  }
});
