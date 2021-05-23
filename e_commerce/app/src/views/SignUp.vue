<template>

      <!-- form -->
      <form @submit.prevent="onSub" class="col-6 mx-auto my-4 text-center">
        
        <h2 class="mb-5">Sign Up</h2>

        <!-- first name input -->
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="firstName" placeholder="First name" v-model="user.firstName">
            <label for="floatingInput">First name</label>
        </div>
        
        <!-- last name input -->
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="lastName" placeholder="Last name" v-model="user.lastName">
            <label for="floatingInput">Last name</label>
        </div>

        <!-- email input -->
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="email" placeholder="name@example.com" v-model="user.email">
            <label for="floatingInput">Email address</label>
        </div>

        <!-- password input -->
        <div class="form-floating mb-3">
            <input type="password" class="form-control" id="password" placeholder="Password" v-model="user.password">
            <label for="floatingPassword">Password</label>
        </div>

        <!-- already registered link-->
        <p class="registered mb-3">
            Already registered? 
            <router-link to="/SignIn" class="link-primary text-decoration-none">Sign In</router-link>
        </p>

        <!-- submit button -->
        <div class="col-8 mx-auto d-grid">
            <button type="submit" class="btn btn-outline-dark btn-large py-2">Sign Up</button>
        </div>
    
    </form>

</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }

    }
  },
  methods: {
    ...mapActions(['register']),
    onSub() {
      if(this.user.firstName !== '' && this.user.lastName !== '' && this.user.email !== '' && this.user.password !== '') {
        this.register(this.user)
      }
    }
  }
}
</script>

<style>

</style>