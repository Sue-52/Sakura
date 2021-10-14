import { createRouter, createWebHashHistory } from "vue-router";
// 1. 定义路由组件， 注意，这里一定要使用 文件的全名（包含文件后缀名）
import Home from "@/views/Home.vue";

const routes = [
  {
    // 主页路由
    path: "/",
    // 重定向
    redirect: "/home",
  },
  {
    path: "/home",
    // 压缩后的可见名称
    component: () => /* webpackChunkName: "home" */ Home,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
