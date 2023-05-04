import { getProducts, getProductByCat, getCategories } from "@/services/api";

export default {
  namespaced: true,
  state: {
    products: null,
    isLoading: true,
    categories: null,
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_IS_LOADING(state, isLoading) {
      state.isLoading = isLoading;
    },
    SET_CATEGORIES(state, data) {
      state.categories = data;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const data = await getProducts();
        commit("SET_PRODUCTS", data);
      } finally {
        commit("SET_IS_LOADING", false);
      }
    },
    async fetchCategories({ commit }) {
      const data = await getCategories();
      commit("SET_CATEGORIES", data);
    },
    async fetchProductsByCategory({ commit }, category) {
      try {
        commit("SET_IS_LOADING", true);
        const data = await getProductByCat(category);
        commit("SET_PRODUCTS", data);
      } finally {
        commit("SET_IS_LOADING", false);
      }
    },
  }
};
