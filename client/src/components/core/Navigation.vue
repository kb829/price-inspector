<template>
  <v-navigation-drawer
    fixed app>
    
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    changeRoute(routeName, selectedIndex) {
      const vm = this;
      vm.selectedIndex = selectedIndex;
      return vm.$router.push({ name: routeName });
    }
  }
}
</script>

<style>
  .toolbar {
    font-weight: bold;
    font-size: 18px;
  }
  .toolbar .text {
    padding-left: 15px;
    color: white;
    text-decoration:none;
  }
  .item-title {
    font-size: 17px;
    font-weight: 500;
  }
  .item-sub-title {
    font-size: 15px;
    font-weight: 500;
  }
  .active {
    font-weight: bold;
  }
</style>