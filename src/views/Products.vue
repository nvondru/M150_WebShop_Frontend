<template>
  <div class="products">
    <div class="card" v-for="product in products" :key="product.id">
      <img :src="product.imageUrl" alt="Avatar" />
      <div class="container">
        <h4>
          <b>{{ product.name }}</b>
        </h4>
        <p>{{ product.price }}.- CHF</p>
        <font-awesome-icon class="faIcon" icon="shopping-basket" />
      </div>
    </div>
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
  grid-template-columns: repeat(4, minmax(0px, 1fr));
  gap: 10px;
  padding: 30px;
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
.faIcon {
  width: 200px;
}
</style>
