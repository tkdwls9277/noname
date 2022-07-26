import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Vuex from "vuex";
import axios from "axios";

Vue.config.productionTip = false;
// Vue.prototype.$axios = axios;

axios.defaults.baseURL = "http://localhost:8080";

new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount("#app");
Vue.prototype.$axios = axios;
