<template>
    <v-app-bar app>
        <v-app-bar-nav-icon @click="drawNav()"></v-app-bar-nav-icon>
        <v-app-bar-title>toolbar title</v-app-bar-title>

        <v-responsive max-width="300">
            <!-- <v-text-field
                dense
                flat
                hide-details
                rounded
                solo-inverted
            ></v-text-field> -->
            <input v-model="userID" placeholder="ID"/>
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
        </v-responsive>
    </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent ({
    data() {
        return {
            drawer: false,
        }
    },
    methods: {
        drawNav() {
            this.drawer = !this.drawer;
            this.$emit('drawNav', this.drawer);
        }
    },
})
</script>

<style>

</style>