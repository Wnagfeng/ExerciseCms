import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import main from "@/views/main.vue";


// vue项目自带路由
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "main",
        component: main
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

