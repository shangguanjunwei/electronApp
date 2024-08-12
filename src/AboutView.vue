<template>
  <div>
    AboutView.vue
    <input type="inputValue" />
  </div>
</template>

<script lang="ts">
export default {
  name: "about",
};
</script>

<script setup lang="ts" name="about">
import { onActivated } from "vue";
import { ref } from "vue";
const inputValue = ref<string>("");

onActivated(()=>{
  alert('11111');
})
</script>

<style scoped></style>
