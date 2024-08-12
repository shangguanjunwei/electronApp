<template>
  <div>
    HomeView.vue
    <input type="inputValue" />
  </div>
</template>

<script lang="ts">
export default {
  name: "home",
};
</script>

<script setup lang="ts" name="home">
import { ref } from "vue";
const inputValue = ref<string>("");
</script>

<style scoped></style>
