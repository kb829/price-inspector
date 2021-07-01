<template>
  <v-navigation-drawer
    v-model="newDrawer"
    app
  >
    <v-sheet
    >
        <!-- <v-avater
        >
        </v-avater> -->
        <div></div>
    </v-sheet>
    <v-divider></v-divider>
    <v-list
        nav
        dense
    >
        <!-- <v-subheader> Menu </v-subheader> -->
        <!-- <v-list-item-group
            v-model="selectedItem"
            active-class="deep-blue--text"
        > -->
            <v-list-item
                v-for="(item, i) in items"
                :key="i"
                link
            >
                <!-- <v-list-item-icon>
                </v-list-item-icon> -->
                <!-- <v-list-item-content> -->
                    <v-list-item-title @click="chRoute(item.link,i)"
                        v-text="item.text"
                    ></v-list-item-title>
                <!-- </v-list-item-content> -->
            </v-list-item>
        <!-- </v-list-item-group> -->
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent ({
    props:{
        drawer: Boolean,
    },
    data() {
        return {
            newDrawer: this.drawer,
            selectedItem: 0,
            items: [
                {
                    text: 'Profile',
                    link: 'Profile',
                },
                {
                    text: "Wishlist",
                    link: "Wishlist",
                },
            ],
        }
    },
    watch: {
        drawer: function() {
            this.newDrawer = this.drawer;
        }
    },
    methods: {
        chRoute(viewName: string, selectedItem: number){
            this.selectedItem = selectedItem;
            return this.$router.push(viewName);
        },
        // getProfile: function() {
        //     this.$axios.get(process.env.VUE_APP_PROFILE_API)
        //     .then(function(response: any) {
                
        //     })
        //     .catch(function(error: any) {

        //     });
        // }
    },
})
</script>

<style>

</style>