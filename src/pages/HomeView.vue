<template>
  <section class="container mx-auto">
    <div
      class="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-8 m-5 max-w-4xl mx-auto"
    >
      <button
        class="flex flex-col items-center justify-center rounded-lg shadow-md p-4 gap-3"
        :class="[
          activeCategory === 'all' ? 'bg-orange-400 text-white' : 'bg-white',
          'shadow-md',
        ]"
        @click="filterCategory('all')"
      >
      <ion-icon name="home-outline"></ion-icon>
      All
    </button>
      <button
        v-for="category in categories"
        :key="category"
        @click="filterCategory(category)"
        class="flex flex-col items-center justify-center rounded-lg shadow-md p-4 gap-3"
        :class="[
          activeCategory === category ? 'bg-orange-400 text-white' : 'bg-white',
          'shadow-md',
        ]"
      >
        <ion-icon
          v-if="category == 'jewelery'"
          name="diamond-outline"
        ></ion-icon>
        <ion-icon
          v-if="category == 'men\'s clothing'"
          name="shirt-outline"
        ></ion-icon>
        <ion-icon
          v-if="category == 'electronics'"
          name="desktop-outline"
        ></ion-icon>
        <ion-icon
          v-if="category == 'women\'s clothing'"
          name="woman-outline"
        ></ion-icon>
        <p>{{ category }}</p>
      </button>
    </div>

    <div v-if="!isLoading" class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
      <div
        v-for="product in products"
        :key="product.id"
        class="bg-white rounded-lg shadow-md relative overflow-hidden p-4"
      >
        <div
          class="flex justify-center items-center hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0 h-full w-full text-white bg-white bg-opacity-80 opacity-0 z-10"
        >
          <button
          class="bg-orange-500 rounded-full px-8 py-2"
          @click="addProduct(product)"
          >
          Añadir
          </button>
        </div>
        <div class="h-40">
          <img
            :src="product.image"
            :alt="product.title"
            class="h-full mx-auto object-center object-contain"
          />
        </div>
        <div class="text-start mt-4">
          <p class="text-sm font-medium text-gray-500 truncate truncate-lines-1">{{ product.title }}</p>
          <div class="w-full flex justify-between items-center mt-2">
            <p class="mt-1 text-lg font-semibold text-gray-900">$ {{ product.price }}</p>
            <ion-icon class="text-orange-500 w-5 h-5" name="heart-outline"></ion-icon>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <loading-spinner/>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";
import loadingSpinner from "@/components/common/loading-spinner.vue";

export default {
  name: "HomeView",
  components: {
    loadingSpinner
  },
  data() {
    return {
      activeCategory: "",
    };
  },
  computed: {
    ...mapState(["products", "categories", "isLoading", "cart"]),
  },
  mounted() {
    this.fetchProducts();
    this.fetchCategories(); // assuming that fetchProducts is a Vuex action
  },
  methods: {
    ...mapActions([
      "fetchProducts",
      "fetchCategories",
      "fetchProductsByCategory",
      "addToCart",
    ]),
    filterCategory(category) {
      this.activeCategory = category;
      if(category == 'all') {
        this.fetchProducts();
        return
      }
      this.fetchProductsByCategory(this.activeCategory);
    },
    addProduct(product) {
      this.addToCart(product)
      console.log(this.cart)
      console.log(this.cart.length)
    }
  },
};
</script>
