import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
const app = createApp(App);
app.use(BootstrapVue);
app.use(router);
app.mount("#app");
