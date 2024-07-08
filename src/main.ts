import { createApp } from "vue";
import "normalize.css";
import "@/assets/css/main.css";
import VueRouter from './router/index'
import { createPinia } from "pinia";
import App from "./App.vue";
const pinia = createPinia();
createApp(App).use(VueRouter).use(pinia).mount("#app");
