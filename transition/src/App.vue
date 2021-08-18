<template>
  <div id="app">
      <router-link to="/" class="home">Home</router-link> |
      <router-link to="/about" class="about">About</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  overflow: hidden;
  outline: none;
  }

  .home {
    text-decoration: none;
    color: #084d6e;
    font-size: 1.5rem;
    font-family: bold;
  }

  .about {
    text-decoration: none;
    color: #084d6e;
    font-family: bold;
    font-size: 1.5rem;
  }
</style>
