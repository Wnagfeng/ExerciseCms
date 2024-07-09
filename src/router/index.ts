import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import main from "@/views/main.vue";


// vue项目自带路由
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "main",
        component: main,
        children: [

        ]
    },
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/pages/login.vue")
    },
    {
        path: "/register",
        name: "register",
        component: () => import("@/views/pages/register.vue")
    },
    {
        path: "/reset-pwd",
        name: "reset-pwd",
        component: () => import("@/views/pages/reset-pwd.vue")
    },
    {
        path: "/403",
        name: "403",
        component: () => import("@/views/pages/403.vue")
    },
    {
        path: "/404",
        name: "404",
        component: () => import("@/views/pages/404.vue")
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

