import Vue from "vue";
import VueRouter from "vue-router";
import Products from "../views/Products.vue";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import AddProduct from "../views/AddProduct.vue";
import Checkout from "../views/Checkout.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: Login },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/products",
    name: "Products",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Products.vue"),
  },
  {
    path: "/sign-up",
    name: "Sign up",
    component: SignUp,
  },
  {
    path: "/add-product",
    name: "Add Product",
    component: AddProduct,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
