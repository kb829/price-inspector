<template>
  <v-app id="inspire">
      <navigation :drawer="drawer"/>
      <appbar @drawNav="drawer = !drawer"/>

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
        drawer: null
    }
  },
})
</script>

<style>

</style>