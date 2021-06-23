<template>
    <v-app-bar app>
        <v-app-bar-nav-icon @click="drawNav"></v-app-bar-nav-icon>
        <v-app-bar-title>toolbar title</v-app-bar-title>

        <v-responsive max-width="300">
            <!-- <v-text-field
                dense
                flat
                hide-details
                rounded
                solo-inverted
            ></v-text-field> -->
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
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