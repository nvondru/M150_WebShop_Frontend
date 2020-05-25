import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuex from "vuex";

Vue.use(Vuex);
Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    cart: {
      items: [],
    },
    users: [],
    currentUser: undefined,
  },

  mutations: {
    addProductToCart(state, payload) {
      state.cart.items.push(payload.product);
    },
    removeProductFromCart(state, payload) {
      state.cart.items.splice(state.cart.items.indexOf(payload.product), 1);
    },
    registerUser(state, payload) {
      state.users.push(payload);
    },
    setCurrentUser(state, payload) {
      state.currentUser = payload;
    },
    logout(state) {
      state.currentUser = undefined;
      state.cart.items = [];
    },
  },
});

new Vue({
  router,
  store: store,
  render: (h) => h(App),
}).$mount("#app");
