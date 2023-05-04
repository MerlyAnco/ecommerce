import Vue from "vue";
import Vuex from "vuex";
import { getProducts, getCategories, getProductByCat } from "@/services/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      {
        email: "usuario1@gmail.com",
        password: "123456",
      },
      {
        email: "usuario2@gmail.com",
        password: "789456",
      },
    ],
    token: null,
    products: null,
    categories: null,
    isLoading: true,
    cart: [],
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_CATEGORIES(state, data) {
      state.categories = data;
    },
    SET_IS_LOADING(state, isLoading) {
      state.isLoading = isLoading;
    },
    ADD_TO_CART(state, product) {
      state.cart.push(product);
      console.log(state.cart);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    INCREMENT_PRODUCT_QUANTITY(state, cartProduct) {
      cartProduct.quantity++;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    DECREMENT_PRODUCT_QUANTITY(state, cartProduct) {
      cartProduct.quantity--;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    DELETE_PRODUCT_OF_CART(state, product) {
      state.cart = state.cart.filter((e) => e.id !== product.id);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    SET_CART(state, cart) {
      state.cart = cart;
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
    addToCart({ commit, state }, product) {
      const cartProduct = state.cart.find((p) => p.id === product.id);
      if (!cartProduct) {
        commit("ADD_TO_CART", { ...product, quantity: 1 });
      } else {
        commit("INCREMENT_PRODUCT_QUANTITY", cartProduct);
      }
    },
    generateToken({ commit }, { email, password }) {
      const token = btoa(email + ':' + password);
      commit('SET_TOKEN', token);
      localStorage.setItem('token', token);
    }
  }
});
