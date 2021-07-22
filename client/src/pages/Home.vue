<template>
  <v-app id="inspire">
      <navigation :drawer="drawer"/>
      <appbar @drawNav="drawerNav" @searchUser="searchUser"/>

      <v-main>

          <v-container fluid>
              <router-view></router-view>
          </v-container>
      </v-main>

      <v-footer app>
      </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent ({
  name: 'App',

  data() {
    return {
        drawer: false,
        userID: "",
    }
  },
  methods: {
    drawerNav(newDrawer: any) {
      this.drawer = newDrawer;
    },
    searchUser(newUserid: any) {
      this.userID = newUserid;
    }
  },
})
</script>

<style>

</style>