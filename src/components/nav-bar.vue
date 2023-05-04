<template>
  <nav class="hidden sm:block bg-orange-500">
    <div class="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-4">
        <div class="flex-shrink-0 flex items-center">
            <router-link to="/home"><img class="hidden sm:block h-12 w-auto" src="../assets/img/logo-full.svg" alt="Logo"></router-link>
        </div>
        <div class="flex flex-row items-center space-x-6">
            <router-link to="/cart">
              <button class="p-1 rounded-full text-white relative">
                <ion-icon class="w-8 h-8" name="cart-outline"></ion-icon>
                <p class="absolute top-0 -right-1.5">{{ lengthCart }}</p>
              </button>
            </router-link>

            <button class="p-1 rounded-full text-white" @click="logout">
              <ion-icon class="w-8 h-8 mr-4" name="log-out-outline"></ion-icon>
            </button>
        </div>
        </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'nav-bar',
  props: {
    msg: String
  },
  computed: {
    ...mapState(['cart']),
    lengthCart() {
      console.log(this.cart)
      return this.cart.length;
    }
  },
  methods: {
    logout() {
      this.$router.push('/')
      localStorage.clear();
    }
  }
}
</script>

<style>

</style>