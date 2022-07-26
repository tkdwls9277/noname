import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import menuState from "../store/state/menus";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: "/",
        name: "home",
        component: {
            menu: menuState,
            content: HomeView,
        },
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
