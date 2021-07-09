<template>
  <div class="card mx-auto mt-5">
    <div>
      <router-link to="/Products" class="link-dark"><i class="fas fa-arrow-left p-3"></i></router-link>
    </div>
    <img :src="currentProduct.image" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">{{ currentProduct.name }}</h5>
      <p class="card-text">{{ currentProduct.desc }}</p>
    </div>
    <div class="cart-footer ms-auto me-5 pb-5">
      <h5 class="card-text">${{ currentProduct.price }}</h5> 
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'ProductInfo',  
  computed: {
    ...mapGetters({
      currentProduct: 'getCurrentProduct',
    }),
  },  
  data() {
    return {
      quantity: 1
    }
  },
  methods: {
    ...mapActions(['addProductToCart']), 
  }
};
</script>
<style scoped>
.card{
  width: 30rem;
}
</style>