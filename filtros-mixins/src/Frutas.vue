<template>
  <div>
    <h1>{{ global }}</h1>
    <ul>
      <li v-for="fruta in frutas" :key="fruta">
        {{ fruta }}
      </li>
    </ul>
    <input type="text" v-model="fruta" @keydown.enter="addElementosLista" />
  </div>
</template>

<script>
import frutasMixin from "./frutasMixin";
export default {
  mixins: [frutasMixin],
};
</script>

<style>
</style>