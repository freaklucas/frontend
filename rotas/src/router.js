import Vue from "vue";
import Router from "vue-router";
import Setup from "./components/Setup.vue";
import Usuario from "./components/usuario/Usuario.vue";

Vue.use(Router);

export default new Router({
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
