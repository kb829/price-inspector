<template>
    <v-app-bar app>
        <v-app-bar-nav-icon @click="drawNav"></v-app-bar-nav-icon>
        <v-toolbar-title>toolbar title</v-toolbar-title>

        <v-responsive max-width="300">
            <v-text-field
                dense
                flat
                hide-details
                rounded
                solo-inverted
            ></v-text-field>
        </v-responsive>
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
            this.$emit('drawNav');
        }
    },
}
</script>

<style>

</style>