import { createStore } from "vuex";

export default createStore({
  state: {
    characteres: [],
    charactersFilter: [],
  },
  mutations: {
    setCharacters(state, payload) {
      state.characters = payload;
    },
    setCharacters(state, payload) {
      state.charactersFilter = payload;
    },
  actions: {},
  modules: {},
});
