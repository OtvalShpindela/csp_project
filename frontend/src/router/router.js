import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/pages/LoginPage";
import MainPage from "@/pages/MainPage";


const routes = [
  {
    path: "/",
    name: "login",
    meta: {layout: 'auth'},
    component: LoginPage,
  },
  {
    path: "/main",
    name: 'main',
    meta: {layout: 'main'},
    component: MainPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
