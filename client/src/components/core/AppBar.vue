<template>
    <v-app-bar app>
        <v-app-bar-nav-icon @click="drawNav"></v-app-bar-nav-icon>
        <v-toolbar-title>toolbar title</v-toolbar-title>
    </v-app-bar>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        drawNav(){
            const vm = this;
            vm.$emit('drawNav');
        }
    },
}
</script>

<style>

</style>