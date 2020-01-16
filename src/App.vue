<template>
  <div id="app">
    <loading :active.sync="isLoading" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
};
</script>

<style lang="scss">
@import "./assets/all.scss";
</style>
