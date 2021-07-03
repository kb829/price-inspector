<template>
  <v-navigation-drawer
    v-model="newDrawer"
    app
  >
    <v-sheet
    >
        <v-avatar
            color="info"
            size="100"
        >
            <v-icon>
                mdi-account-circle
            </v-icon>
        </v-avatar>
        <div></div>
    </v-sheet>
    <v-divider></v-divider>
    <v-list
        nav
        dense
    >
        <v-subheader> Menu </v-subheader>
        <!-- <v-list-item-group
            v-model="selectedItem"
            active-class="deep-blue--text"
        > -->
            <v-list-item
                v-for="(item, i) in items"
                :key="i"
                link
            >
                <v-list-item-icon>
                    <v-icon>
                        {{item.icon}}
                    </v-icon>
                </v-list-item-icon>
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
                    icon: 'mdi-account',
                },
                {
                    text: 'Wishlist',
                    link: 'Wishlist',
                    icon: 'mdi-format-list-text',
                },
            ],
            userID: "",
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
    },
})
</script>

<style>

</style>