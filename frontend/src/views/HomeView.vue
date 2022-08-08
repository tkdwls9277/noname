<template>
    <!--<hello-world />-->
    <navi-bar />
</template>

<script lang="ts">
import Vue from "vue";
// import HelloWorld from "@/components/HelloWorld.vue";
import naviBar from "@/components/NaviBar.vue";

export default Vue.extend({
    name: "homeView",

    components: {
        // HelloWorld,
        naviBar,
    },
});
</script>
