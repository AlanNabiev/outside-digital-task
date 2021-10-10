import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import './assets/styles/fonts.css'

createApp(App).use(store).mount("#app");
