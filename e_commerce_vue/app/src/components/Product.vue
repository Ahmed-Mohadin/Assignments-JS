<template>
  <div class="col mb-4">
    <div class="card h-100 p-3">
      <router-link to="/ProductInfo" class="mx-auto text-dark"><i @click="addCurrentProduct(product)" class="fas fa-info-circle"></i></router-link>
      <img :src="product.image" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text">{{ product.short }}</p>
      </div>
      <div class="input-group row mx-auto">
        <button class="btn btn-dark col-9 ms-4" @click="addProductToCart({ product, quantity })">Add to cart</button>
      </div>

    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ProductCard',
  props: ['product'],
  data() {
    return {
      quantity: 1
    }
  },
  methods: {
    ...mapActions(['addProductToCart', 'currentProduct']),
    addCurrentProduct(product) {
      this.currentProduct(product);
    },
  }
}
</script>

<style>

</style>