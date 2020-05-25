<template>
  <div class="container">
    <div class="login-page">
      <div class="form">
        <h2>Login</h2>
        <form class="login-form">
          <input ref="loginEmail" type="text" placeholder="Email" />
          <input ref="loginPassword" type="password" placeholder="Password" />
          <button @click="login">login</button>
          <p class="message">
            Not registered?
            <router-link to="/sign-up">Create an account instead</router-link>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      for (let index = 0; index < this.$store.state.users.length; index++) {
        const user = this.$store.state.users[index];
        if (
          user.email === this.$refs.loginEmail.value &&
          user.password === this.$refs.loginPassword.value
        ) {
          this.$store.commit("setCurrentUser", user);
          this.$router.push({ path: "products" });
        }
      }
    },
  },
};
</script>

<style scoped>
.form {
  position: absolute;
  z-index: 1;
  background: #ffffff;
  width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  left: 50%;
  top: 50vh;
  transform: translate(-50%, -50%);
}
.form input {
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  text-transform: uppercase;
  outline: 0;
  background: orange;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,
.form button:active,
.form button:focus {
  background: orange;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: orange;
  text-decoration: none;
}
.form .register-form {
  display: none;
}
.container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
}
.container:before,
.container:after {
  content: "";
  display: block;
  clear: both;
}
.container .info {
  margin: 50px auto;
  text-align: center;
}
.container .info h1 {
  margin: 0 0 15px;
  padding: 0;
  font-size: 36px;
  font-weight: 300;
  color: #1a1a1a;
}
.container .info span {
  color: #4d4d4d;
  font-size: 12px;
}
.container .info span a {
  color: #000000;
  text-decoration: none;
}
.container .info span .fa {
  color: #ef3b3a;
}
body {
  background: #76b852; /* fallback for old browsers */
  background: -webkit-linear-gradient(right, #76b852, #8dc26f);
  background: -moz-linear-gradient(right, #76b852, #8dc26f);
  background: -o-linear-gradient(right, #76b852, #8dc26f);
  background: linear-gradient(to left, #76b852, #8dc26f);
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
