import Vue from "vue";
import Router from "vue-router";
import Setup from "./components/Setup.vue";
import Usuario from "./components/usuario/Usuario.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Setup,
    },
    {
      path: "/usuario",
      component: Usuario,
    },
  ],
});
