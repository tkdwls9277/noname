import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import Index from "@/views/HomeView.vue";
import Page2_1 from "@/views/AboutView.vue";
// import menuState from "@/store/state/menus.ts";
import Menus from "@/component/MenusBar.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: "/",
        name: "Index",
        components: {
            menu: Menus,
            content: Index,
        },
    },
    {
        path: "/Page2_1",
        name: "Page2_1",
        components: {
            menu: Menus,
            content: Page2_1,
        },
    },
    {
        path: "/Page2_2",
        name: "Page2_2",
        components: {
            menu: Menus,
            content: {
                template: `
            <div style="width: 100%;
            height: 100%;
            background-color: green;">test</div>
          `,
            },
        },
    },
    {
        path: "/Page3",
        name: "Page3",
        components: {
            menu: Menus,
            content: {
                template: `
            <div style="width: 100%;
            height: 100%;
            background-color: gray;">test</div>
          `,
            },
        },
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
