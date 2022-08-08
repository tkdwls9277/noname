<template>
    <div class="ma-12 pa-12">
        <v-card>
            <v-navigation-drawer permanent expand-on-hover>
                <v-list>
                    <v-list-item class="px-2">
                        <v-list-item-avatar>
                            <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
                        </v-list-item-avatar>
                    </v-list-item>

                    <v-list-item link>
                        <v-list-item-content>
                            <v-list-item-title class="text-h6"> Sandra Adams </v-list-item-title>
                            <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>

                <v-divider></v-divider>

                <v-list nav dense>
                    <v-list-item link>
                        <v-list-item-icon>
                            <v-icon>mdi-folder</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>My Files</v-list-item-title>
                    </v-list-item>
                    <v-list-item link>
                        <v-list-item-icon>
                            <v-icon>mdi-account-multiple</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Shared with me</v-list-item-title>
                    </v-list-item>
                    <v-list-item link>
                        <v-list-item-icon>
                            <v-icon>mdi-star</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Starred</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
        </v-card>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
    created() {
        this.getTodoList();
    },
    methods: {
        getTodoList: function () {
            axios
                .get("https://todo-list.loca.lt/list")
                .then((res) => {
                    console.log(res.data);
                })
                .catch((ex) => {
                    console.log("list get error", ex);
                });
        },
    },
});
</script>
<style lang=""></style>
