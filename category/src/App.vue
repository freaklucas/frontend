<template>
  <div class="container">
    <h1>Personagens</h1>
    <FilterStatus />
    <FilterName />
    <ListCharacters />
  </div>
</template>

<script>
import ListCharacters from "@/components/ListCharacters";
import FilterStatus from "./components/FilterStatus.vue";
import FilterName from "./components/FilterName.vue";

export default {
  name: "App",
  components: {
    FilterName,
    ListCharacters,
    FilterStatus,
  },
};
</script>

<style lang="scss">
:root {
  --background-body: #24282f;
  --background-card: #3c3e44;
  --text-white: #ffffff;
  --text-gray: #c0c0c0;
  --text-orange: #ff9800;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background-color: var(--background-body);
  color: var(--text-white);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
h1 {
  margin-bottom: 3rem;
  text-align: center;
}
.container {
  width: 980px;
  max-width: 90%;
  margin: 5rem auto;
}
img {
  width: 100%;
}
</style>