import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import Home from "@/views/HomeView.vue";
// import todoList from "@/views/TodoListView.vue";
// import menuState from "@/store/state/menus.ts";
// import Menus from "@/components/MenusBar.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/todoList",
        name: "todoList",
        component: () => import("@/views/TodoListView.vue"),
    },
    // {
    //     path: "/Page2_2",
    //     name: "Page2_2",
    //     components: {
    //         menu: Menus,
    //         content: {
    //             template: `
    //         <div style="width: 100%;
    //         height: 100%;
    //         background-color: green;">test</div>
    //       `,
    //         },
    //     },
    // },
    // {
    //     path: "/Page3",
    //     name: "Page3",
    //     components: {
    //         menu: Menus,
    //         content: {
    //             template: `
    //         <div style="width: 100%;
    //         height: 100%;
    //         background-color: gray;">test</div>
    //       `,
    //         },
    //     },
    // },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
