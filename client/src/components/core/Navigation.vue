<template>
  <v-navigation-drawer
    v-model="drawer"
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
            >
                <!-- <v-list-item-icon>
                </v-list-item-icon> -->
                <!-- <v-list-item-content> -->
                    <v-list-item-title
                        v-text="item.text"
                    ></v-list-item-title>
                <!-- </v-list-item-content> -->
            </v-list-item>
        <!-- </v-list-item-group> -->
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
    data() {
        return {
            selectedItem: 0,
            items: [
                { text: "Profile", },
                { text: "Wishlist", },
            ]
        }
    },
    methods: {

    },
}
</script>

<style>

</style>