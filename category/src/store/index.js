import { createStore } from "vuex";

export default createStore({
  state: {
    characters: [],
    charactersFilter: [],
  },
  mutations: {
    setCharacters(state, payload) {
      state.characters = payload;
    },
    setCharactersFilter(state, payload) {
      state.charactersFilter = payload;
    },
  },
  actions: {
    async getCharacters({ commit }) {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );

        const data = await response.json();

        commit("setCharacters", data.results);
        commit("setCharactersFilter", data.results);
      } catch (e) {
        console.log(e);
      }
    },
    filterStatus({ commit, state }, status) {
      const results = state.characters.filter((character) => {
        return character.status.includes(status);
      });
      commit("setCharactersFilter", results);
    },
  },
  modules: {},
});
