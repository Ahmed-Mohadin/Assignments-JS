<template>

  <!-- navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

    <!-- container -->
    <div class="container-fluid container">    

      <!-- navbar brand -->
      <router-link to="/" class="navbar-brand">E Commerce</router-link>

      <!-- navbar toggler -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- navbar toggler -->
    
      <!-- navbar collapse -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <!-- navbar list -->
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

          <!-- navbar list item -->
          <li class="nav-item me-2 d-flex navbar-links" v-if="!loggedIn">
            <router-link to="/Products" class="nav-link bg-primary text-dark rounded px-4 me-2" >Products</router-link>
            <router-link to="/SignIn" class="nav-link bg-light text-dark rounded px-4 me-2">Log In</router-link>
            <router-link to="/About" class="nav-link bg-info text-dark rounded px-4">About</router-link>
          </li>

          <!-- navbar list item -->
          <li class="nav-item me-2" v-if="loggedIn">
            <i class="fas fa-user"></i>
            <router-link class="nav-link text-dark" aria-current="page" to="/user">Settings</router-link>
          </li>

          <!-- navbar list item -->
          <li class="nav-item">
            <div class="input-group">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-success text-white px-3 input-group-text" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                <span>Cart</span>
                <i class="fas fa-shopping-cart px-1"></i>
              </button>
              <div class="collapse cart-open" id="collapseExample">
                <div class="card card-body">
                  <ShoppingCart />
                </div>
              </div>
            </div>
          </li>

        </ul>

      </div>

    </div>

  </nav>

</template>

<script>
import { mapGetters } from 'vuex'
import ShoppingCart from './shoppingCart/ShoppingCart'
export default {
  components: {
    ShoppingCart
  },
  computed: {
    ...mapGetters(['loggedIn'])
  }
  // data() {
  //   return {
  //     loggedIn: false
  //   }
  // }
}
</script>

<style scoped>
  nav .cart-open{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    border: solid 5px #000;
  }
  @media (max-width: 992px){
    nav .navbar-links{
      margin: 1rem 0;
      justify-content: space-evenly;
    }
  }
</style>