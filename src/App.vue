<template>
  <div>
    <button @click="toHome">Home</button>
    <button @click="toAbout">About</button>
    <RouterView>
      <template v-slot="{ Component, route }">
        <keep-alive include="home,about">
          <component :is="Component" :key="route.path"></component>
        </keep-alive>
      </template>
    </RouterView>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const toHome = () => {
  router.push("/");
};
const toAbout = () => {
  router.push("/about");
};
</script>
