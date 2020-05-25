<template>
  <div>
    <div id="products" class="products">
      <div class="card" v-for="product in products" :key="product.id">
        <img :src="product.imageUrl" alt="Avatar" />
        <div class="container">
          <h4>
            <b>{{ product.name }}</b>
          </h4>
          <p>{{ product.price }}.- CHF</p>
          <p @click="addToCart(product)" class="button--add">Add to cart</p>
        </div>
      </div>
      <div class="card special" @click="redirect">
        <img
          src="https://static.thenounproject.com/png/645446-200.png"
          alt="Avatar"
        />
        <div class="container">
          <h4></h4>
        </div>
      </div>
    </div>
    <transition name="fade">
      <div class="cart" v-if="this.$store.state.cart.items.length > 0">
        <div
          v-for="(product, index) in this.$store.state.cart.items"
          :key="index"
          class="cart__item"
          @click="removeFromCart(product)"
        >
          <img :src="product.imageUrl" alt="" />
        </div>
        <div class="total">Total: {{ total }}.- CHF</div>

        <div class="checkout" @click="checkout">Checkout</div>
      </div>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import Service from "../service.js";
export default {
  name: "Products",
  components: {},
  data() {
    return {
      products: [],
    };
  },
  computed: {
    total() {
      let total = 0;
      for (
        let index = 0;
        index < this.$store.state.cart.items.length;
        index++
      ) {
        const product = this.$store.state.cart.items[index];
        total += Number(product.price);
      }
      return total;
    },
  },
  methods: {
    addToCart(product) {
      this.$store.commit("addProductToCart", { product });
      console.log(this.$store.state.cart.items);
    },
    removeFromCart(product) {
      this.$store.commit("removeProductFromCart", { product });
      console.log(this.$store.state.cart.items);
    },
    redirect() {
      this.$router.push({ path: "add-product" });
    },
    checkout() {
      this.$router.push({ path: "checkout" });
    },
  },
  mounted: function() {
    Service.getProducts().then((data) => {
      this.products = data;
    });
  },
};
</script>

<style scoped>
.products {
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(6, minmax(0px, 1fr));
  gap: 10px;
  padding: 30px;
  transition: all 0.3s;
  margin-bottom: 100px;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.2s;
  width: 100%;
  cursor: pointer;
  text-align: center;
  padding-top: 15px;
  box-sizing: border-box;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  background-color: #f1f1f1;
}

.container {
  padding: 2px 16px;
}
img {
  height: 200px;
}

.button--add {
  background-color: orange;
  padding: 10px;
  margin: 0px 50px 10px 50px;
  border-radius: 5px;
  transition: color 0.05s;
}
.button--add:hover {
  color: white;
}
.cart {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  background-color: orange;
  display: inline-flex;
  padding: 10px 0px;
  align-items: center;
}
.cart__item {
  background-color: white;
  margin-left: 10px;
  border-radius: 5px;
  padding: 10px;
}
.cart__item > img {
  height: 60px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s, tranform 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(100%);
}
.checkout {
  font-size: 20px;
  position: absolute;
  right: 20px;
  cursor: pointer;
  transition: all 0.05s ease-in;
  background-color: black;
  padding: 10px 50px;
  border-radius: 5px;
  color: white;
}
.checkout:hover {
  color: black;
  background-color: white;
}
.total {
  margin-left: 20px;
  font-size: 20px;
}

@media only screen and (max-width: 1600px) {
  .products {
    margin-top: 80px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0px, 1fr));
    gap: 10px;
    padding: 30px;
    transition: all 0.3s;
  }
}
</style>
