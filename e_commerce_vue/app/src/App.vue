<template>
  <div id="app">

    <header>
      <Navbar />
    </header>
    
    <section class="section">
      <div class="container">
        <router-view />
      </div>
    </section>
    
    <footer class=" text-center bg-light py-5">
      &copy; 2021
    </footer>

  </div>

</template>

<script>
import Navbar from './components/Navbar'
import { mapActions } from 'vuex'
export default {
  components: {
    Navbar
  },
  methods: {
    ...mapActions(['getProducts'])
  },
  created() {
    this.getProducts()
  }
}
</script>

<style>
  @import url('./assets/css/global.css');

</style>