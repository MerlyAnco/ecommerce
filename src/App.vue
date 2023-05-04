<template>
  <div id="app" class="bg-gray-50">
      <nav-bar v-if="$route.path !== '/'"/>
      <router-view/>
      <nar-bar-footer v-if="$route.path !== '/'"/>
  </div>
</template>

<script>
import NavBar from './components/nav-bar.vue';
import NarBarFooter from './components/nar-bar-footer.vue';

export default {
  components: {
    NavBar,
    NarBarFooter
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
