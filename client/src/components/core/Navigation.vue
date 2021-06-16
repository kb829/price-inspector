<template>
  <v-navigation-drawer
    v-model="drawer"
    app
  >
    <v-sheet
    >
        <v-avater
        >
        </v-avater>
        <div></div>
    </v-sheet>
    <v-divider></v-divider>
    <v-list
        nav
        dense
    >
        <v-list-item-group
            v-model="group"
            active-class="deep-blue--text"
        >
            <v-list-item
            
            >
                <v-list-item-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title> 1 </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>

</style>