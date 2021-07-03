<template>
  <v-app id="inspire">
      <navigation :drawer="drawer"/>
      <appbar @drawNav="drawerNav"/>

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
    }
  },
})
</script>

<style>

</style>