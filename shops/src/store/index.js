import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
   products: [],
   productsInBag: [],
   like: 0,
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
    loadLikeBag(state, products) {
      state.like = products;
    },
    addToBag(state, product) {
      state.productsInBag.push(product);
      localStorage.
        setItem("productsInBag", JSON.
          stringify(state.productsInBag));
      console.log(JSON.
        stringify(state.productsInBag))
    },
    removeFromBag(state, productId) {
      let updatedBag = state.productsInBag
        .filter(item => item.id != productId );
      
      state.productsInBag = updatedBag;
      
      localStorage.
        setItem("productsInBag", JSON.
          stringify(state.productsInBag));
    },
    addLike(state) {
      state.like++;
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
          JSON.parse(localStorage
            .getItem("productsInBag")));
      }
    },

    loadLikeBag({ commit }) {
      if (localStorage.getItem("like")) {
        commit('loadLikeBag', 
          JSON.parse(localStorage
            .getItem("like")));
      }
    },

    addToBag({ commit }, product) {
      commit('addToBag', product);
    },
    addLike({commit}) {
      commit('addLike');
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
