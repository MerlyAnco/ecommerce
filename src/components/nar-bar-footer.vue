<template>
  <footer
    class="bg-white sm:bg-orange-500 shadow-lg border-t-2 border-orange-500 py-4  px-5 fixed sm:static bottom-0 w-full z-10"
  >
    <div class="container px-5 mx-auto sm:hidden w-full flex flex-row justify-between">
      <div>
        <router-link to="/home">
          <ion-icon class="icon" name="home-outline"></ion-icon>
        </router-link>
      </div>
      <div class="flex flex-row gap-8">
        <router-link to="/cart" class="relative">
          <ion-icon class="icon" name="cart-outline"></ion-icon>
          <p class="text-orange-500 font-bold absolute -right-1.5 -top-3.5">{{ lengthCart }}</p>
        </router-link>
        <button @click="logout">
          <ion-icon class="icon" name="exit-outline"></ion-icon>
        </button>
      </div>
    </div>
    <div class="container mx-auto hidden sm:block w-full">
      <img class="h-10 w-auto mx-auto" src="../assets/img/logo-full.svg" alt="Logo">
    </div>
  </footer>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "nav-bar-footer",
  computed: {
    ...mapState({
      cart:(state) => state.cart.cart
    }),
    lengthCart() {
      return this.cart.length;
    }
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push('/')
    }
  }
};
</script>

<style></style>
