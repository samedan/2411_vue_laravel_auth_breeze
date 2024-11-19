import { createApp, markRaw } from "vue";
import "./axios";
import { createPinia } from "pinia";
import router from "./router";

import "./style.css";
import App from "./App.vue";

const pinia = createPinia();

// allow acces to store throughout the app
pinia.use(({ store }) => {
    store.router = markRaw(router);
});

const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount("#app");
