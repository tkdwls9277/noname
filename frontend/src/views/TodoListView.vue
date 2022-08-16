<template lang="">
    <v-content>
        <todo-input />
        <todo-list />
    </v-content>
</template>
<script lang="ts">
import Vue from "vue";
import TodoList from "@/components/todoList/todoList.vue";
export default Vue.extend({
    components: {
        TodoList,
    },
});
</script>
<style lang=""></style>
