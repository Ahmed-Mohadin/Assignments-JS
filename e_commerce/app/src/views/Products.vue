<template>
  <div class="container mt-5">
    <div class="row row-cols-1 row-cols-md-3">
      <Product v-for="product in products" :key="product._id" :product="product" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Product from '../components/Product'
export default {
  components: {
    Product
  },
  computed: {
    ...mapGetters(['products'])
  }
}
</script>

<style>

</style>