<template>

    <!-- form -->
    <form @submit.prevent="onSub" class="col-6 mx-auto mt-5 text-center">
        
        <h2 class="mb-5">Sign In</h2>

        <!-- email input -->
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="email">
            <label for="floatingInput">Email address</label>
        </div>

        <!-- password input -->
        <div class="form-floating mb-3">
            <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
            <label for="floatingPassword">Password</label>
        </div>

        <!-- not registered link-->
        <p class="registered mb-3">
            Not registered? 
            <router-link to="/SignUp" class="link-primary text-decoration-none">Sign Up</router-link>
        </p>

        <!-- submit button -->
        <div class="col-8 mx-auto d-grid">
            <button type="submit" class="btn btn-outline-dark btn-large py-2">Sign In</button>
        </div>
    
    </form>

</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    onSub() {
      if(this.email !== '' && this.password !== '') {
        let user = {
          email: this.email,
          password: this.password
        }
        let route = this.$route.query.redirect

        this.login({user, route})
        // this.$router.push(this.$route.query.redirect)
      }
    }
  }
}
</script>

<style>

</style>