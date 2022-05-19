import { createStore } from "vuex";

export default createStore({
  state: {
    users: [],
    usersFilter: [],
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },
    setUsersFilter(state, payload) {
      state.usersFilter = payload;
    },
  },
  actions: {
    async getCharacters({ commit }) {
      try {
        const response = await fetch("https://fakestoreapi.com/users");

        const data = response.json();

        console.log(data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  modules: {},
});
