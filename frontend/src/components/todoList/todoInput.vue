<template>
    <form class="form">
        <h1>todos</h1>
        <div class="plusInput">
            <v-text-field label="What needs to be done?">
                <v-btn dark icon slot="append" color="purple"><v-icon dark> mdi-plus </v-icon></v-btn>
            </v-text-field>
        </div>
    </form>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "todoInput",
    components: {},
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
</style>
