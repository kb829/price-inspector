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

<script>
export default {
  data() {
    return {
        drawer: null
    }
  }
}
</script>

<style>

</style>