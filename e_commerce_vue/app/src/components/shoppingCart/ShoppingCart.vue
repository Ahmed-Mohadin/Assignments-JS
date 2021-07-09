<template>

  <div class="my-cart">

    <ShoppingCartProduct v-for="item in shoppingCart" :key="item.product.id" :item="item" />

    <!-- check if cart is empty -->
    <div v-if="shoppingCart.length < 1">
      <div class="p-2 d-flex justify-content-center align-items-center">
        Cart is Empty.
      </div>
      <div class="dropdown-divider"></div>
    </div>
    
    <div class="dropdown-divider"></div>

   <!-- total cost -->
    <div class="p-2 d-flex justify-content-between align-items-center">
      <div>
        <div class="total-price">
          Total: <span>$ {{ shoppingCartTotal }}</span>
        </div>
        <small class="text-muted"><i class="fas fa-shipping-fast"></i>: Free Shipping</small>
      </div>
      <button class="btn btn-success"><router-link to="/Checkout" class="link-light text-decoration-none">To Checkout</router-link></button>
    </div>
  
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import ShoppingCartProduct from './ShoppingCartProduct'
export default {
  name: 'ShoppingCart',
  components: {
    ShoppingCartProduct
  },
  computed: {
    ...mapGetters(['shoppingCart', 'shoppingCartTotal'])
  }
}
</script>

<style scoped>
  .my-cart{
    height: 25rem;
    overflow-y: scroll;
  }
</style>