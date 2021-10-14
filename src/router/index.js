import { createRouter, createWebHashHistory } from "vue-router";
// import Home from "@/views/Home.vue";
const Home = () => import(/* webpackChunkName: "home" */ "@/views/Home.vue");

const routes = [
  {
    // 主页路由
    path: "/",
    // 重定向
    redirect: "/home",
  },
  {
    path: "/home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
