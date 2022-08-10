<template>
    <v-content>
        home 화면 입니다.
        <div style="background=red">home</div>
        <navi-bar />
    </v-content>

    <!--<hello-world />-->
</template>

<script lang="ts">
import Vue from "vue";
// import HelloWorld from "@/components/HelloWorld.vue";
import naviBar from "@/components/NaviBar.vue";

export default Vue.extend({
    name: "homeView",

    components: {
        naviBar,
        // HelloWorld,
        // naviBar,
    },
});
</script>
