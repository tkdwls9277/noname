<template>
    <v-content>
        <todo-input />
        <todo-list />
        <atomButton :link="{ name: 'atomButton', url: '#' }" />
    </v-content>
</template>

<script lang="ts">
import Vue from "vue";
import TodoList from "@/components/todoList/todoList.vue";
import atomButton from "@/components/atoms/atomButton.vue";

export default Vue.extend({
    name: "todoList",
    components: {
        TodoList,
        atomButton,
    },
});
</script>

<style lang="scss"></style>
