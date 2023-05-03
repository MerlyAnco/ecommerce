<template>
  <nav class="hidden md:block bg-orange-500">
    <div class="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
        <div class="flex-shrink-0 flex items-center">
            <a href="/home"><img class="hidden lg:block h-20 w-auto" src="../assets/img/logo-full.svg" alt="Logo"></a>
        </div>
        <div class="flex flex-row items-center space-x-6">
            <a href="/cart">
              <button class="p-1 rounded-full text-white relative">
                <ion-icon class="w-8 h-8" name="cart-outline"></ion-icon>
                <p class="absolute top-0 -right-1.5">{{ lengthCart }}</p>
              </button>
            </a>

            <button class="p-1 rounded-full text-white">
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
  }
}
</script>

<style>

</style>