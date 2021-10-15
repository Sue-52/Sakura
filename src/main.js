import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./utils/reset.css";

const app = createApp(App);

// 挂在 vuex
app.use(store);
// 挂载 路由
app.use(router);

app.mount("#app");
