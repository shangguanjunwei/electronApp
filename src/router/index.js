import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "../HomeView.vue";
import AboutView from "../AboutView.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/about", name: "about", component: AboutView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
