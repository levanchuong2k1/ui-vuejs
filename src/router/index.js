import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Error from "../views/Error.vue";
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/error", component: Error },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
