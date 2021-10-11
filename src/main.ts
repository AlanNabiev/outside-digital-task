import { createApp } from "vue";
import App from "./App.vue";
import './assets/styles/fonts.css'

import registerBaseComponents from './helpers/registerBaseComponents'

export const app = createApp(App)

// Register base components
registerBaseComponents(app)

app.mount('#app')