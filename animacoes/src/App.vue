<template>
  <div id="app" class="container-fluid">
    <h1>Animações</h1>
    <hr />
    <b-button variant="primary" @click="exibir = !exibir"
      >Mostrar mensagem</b-button
    >
    <transition name="fade" appear>
      <b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
    </transition>
    <transition name="slide" type="animation" appear>
      <b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
    </transition>
    <transition
      enter-active-class="animated bounce"
      leave-active-class="animated shake"
    >
      <b-alert variant="info" show v-show="exibir">{{ msg }}</b-alert>
    </transition>

    <hr />
    <hr />

    <b-select v-model="tipoAnimacao" class="mb-4">
      <option value="fade">Fade</option>
      <option value="slide">Slide</option>
    </b-select>

    <transition :name="tipoAnimacao" mode="out-in">
      <b-alert variant="info" show v-if="exibir" key="info">{{ msg }}</b-alert>
      <b-alert variant="warning" show v-else key="warning">{{ msg }}</b-alert>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Uma mensagem de informação para usuário 1",
      exibir: false,
      tipoAnimacao: "fade",
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1.5rem;
}
button {
  margin-bottom: 18px;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}

@keyframes slide-in {
  from {
    tranform: translateY(40px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    tranform: translateY(0);
  }
  to {
    transform: translateY(40px);
  }
}

.slide-enter-active {
  animation: slide-in 2s ease;
  transition: 2s;
  color: red;
}

.slide-leave-active {
  animation: slide-in 2s ease;
  transition: 2s;
  color: red;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
}
</style>
