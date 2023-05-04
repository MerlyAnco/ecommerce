<template>
  <footer
    class="bg-white sm:bg-orange-500 shadow-lg border-t-2 border-orange-500 py-4  px-5 fixed sm:static bottom-0 w-full"
  >
    <div class="container px-5 mx-auto sm:hidden w-full flex flex-row justify-between">
      <div>
        <router-link to="/home">
          <ion-icon name="home-outline"></ion-icon>
        </router-link>
      </div>
      <div class="flex flex-row space-x-5">
        <router-link to="/cart">
          <ion-icon name="cart-outline"></ion-icon>
        </router-link>
        <button @click="logout">
          <ion-icon name="exit-outline"></ion-icon>
        </button>
      </div>
    </div>
    <div class="container mx-auto hidden sm:block w-full">
      <img class="h-10 w-auto mx-auto" src="../assets/img/logo-full.svg" alt="Logo">
    </div>
  </footer>
</template>

<script>
export default {
  name: "nav-bar-footer",
  methods: {
    logout() {
      this.$router.push('/')
      localStorage.clear();
    }
  }
};
</script>

<style></style>
