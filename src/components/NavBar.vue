<template>
  <div id="navbar" class="navbar">
    <div v-if="this.$store.state.currentUser != undefined">
      <div>Hi {{ currentUser }}, welcome to the M150 Web Shop</div>
      <div @click="logout" class="logout">Logout</div>
    </div>
    <div v-else>Welcome to the M150 Web Shop</div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.push({ path: "login" });
    },
  },
  computed: {
    currentUser() {
      return this.$store.state.currentUser.name;
    },
    currentPath() {
      return this.$router.currentRoute.name;
    },
  },
};
</script>

<style scoped>
.navbar {
  height: 80px;
  width: 100%;
  background-color: black;
  color: white;
  font-size: 30px;
  position: fixed;
  top: 0px;
  left: 0px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.logout {
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 25px;
  cursor: pointer;
}
</style>
