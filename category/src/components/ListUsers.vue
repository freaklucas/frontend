<template>
  <section>
    <div class="users">
      <div class="users__item">
        <h2>Users</h2>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch("getUsers");
    });
  },
};
</script>

<style>
</style>