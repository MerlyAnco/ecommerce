<template>
  <div class="flex flex-col content-center justify-center h-screen bg-yellow-100">
    <img class="logo mt-4 mx-auto" src="../assets/img/logo.png" alt="" />
    <form @submit.prevent="login" class="bg-white shadow rounded p-6 mb-4 mx-auto mt-4">
      <label class="font-bold mb-2 block">Email:</label>
      <input
        class="border border-orange-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        type="email" v-model="email"
      />
      <label class="font-bold mb-2 block">Password:</label>
      <div class="w-fit m-auto items-center relative">
        <input class="border border-orange-500 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline" :type="type" v-model="password"/>
        <img class="absolute right-0 top-0 mr-3 mt-3 cursor-pointer" @click="showPassword" :src="eyeIconSource" :alt="passwordVisible ? 'Hide password' : 'Show password'" />
      </div>
      <span class="text-red-500 text-sm mt-1">{{ errorMessage }}</span>
      <button
        class="mx-auto bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 mt-3 rounded cursor-pointer block"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
      type: 'password',
    }
  },
  computed: {
    ...mapState(['users']),
    passwordVisible() {
      return this.type === "password";
    },
    eyeIconSource() {
      return this.passwordVisible
        ? require("@/assets/img/eye-show.svg")
        : require("@/assets/img/eye-hide.svg");
    },
  },
  methods: {
    showPassword() {
      this.type = this.passwordVisible ? 'text' : 'password';
    },
    login() {
      const user = this.users.find(user => user.email  === this.email && user.password === this.password);
      console.log(user)
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        this.$router.push("/home");
      } else {
        this.errorMessage = "Nombre de usuario o contraseña incorrectos.";
        setTimeout(() => this.errorMessage = '', 3000);
      }
    }
  }
};
</script>

<style>
.logo {
  width: 80px;
}
</style>
