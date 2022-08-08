<template>
    <v-app>
        <v-app-bar app dark>
            <div class="d-flex align-center">side project</div>

            <v-spacer></v-spacer>

            <div target="_blank">오른쪽</div>
        </v-app-bar>

        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "App",

    data: () => ({
        //
    }),
});
</script>
