<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar
  }
};
</script>

<style>
html,
body {
  margin: 0px;
  padding: 0px;
}
</style>
