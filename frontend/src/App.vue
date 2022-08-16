<template>
    <v-app>
        <v-app-bar app dark>
            <div class="d-flex align-center">side project</div>

            <template>
                <v-tabs align-with-title>
                    <v-tab to="/">home</v-tab>
                    <v-tab to="todoList">todoList</v-tab>
                    <v-tab>Tab 3</v-tab>
                </v-tabs>
            </template>

            <v-spacer></v-spacer>

            <div target="_blank">오른쪽</div>
        </v-app-bar>
        <router-view />
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
