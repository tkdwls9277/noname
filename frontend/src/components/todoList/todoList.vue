<template>
    <form class="form">
        <h1>todos</h1>
        <div class="plusInput">
            <v-text-field label="What needs to be done?">
                <v-btn dark icon slot="append" color="purple"><v-icon dark> mdi-plus </v-icon></v-btn>
            </v-text-field>
        </div>
        <ul class="todo-list">
            <li class="todo">
                <!-- <v-checkbox v-model="selectedList" label="test" value="test"></v-checkbox> -->
                <div v-for="(item, i) in listData" :key="i" class="view">
                    <v-checkbox v-model="selectedList" :label="item.title" :value="item.content"></v-checkbox>
                </div>
                <v-checkbox v-model="testList" :label="testCheck"></v-checkbox>
                <v-checkbox v-model="testList" :label="testCheck"></v-checkbox>
            </li>
        </ul>
    </form>
</template>
<script lang="ts">
import Vue from "vue";
import axios from "@/components/modules/controlAxios.ts";
import list from "@/components/dataDto.ts";

export default Vue.extend({
    data: () => ({
        listData: [],
        selectedList: [],
        testList: [],
        testCheck: "test",
    }),
    created: async function () {
        console.log("여기서 부름");
        this.listData = await axios();
        console.log(this.listData, " 여기서 보임");
    },
});
</script>
<style lang="scss">
h1 {
    font-size: 100px;
    font-weight: 100;
}
.plusInput {
    width: 50%;
}
.form {
    text-align: -webkit-center;
}
.main {
    position: relative;
    z-index: 2;
    border-top: 1px solid #e6e6e6;
}
.todo-list {
    margin: 0;
    padding: 0;
    list-style: none;
}
.todo-list li {
    position: relative;
    font-size: 24px;
    border-bottom: 1px solid #ededed;
}
</style>
