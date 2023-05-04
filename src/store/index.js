import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import products from "./modules/products";
import cart from "./modules/cart";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: auth,
    products: products,
    cart: cart,
  },
  state: {
    isLoading: true,
  },
  mutations: {
    SET_IS_LOADING(state, isLoading) {
      state.isLoading = isLoading;
    },
  },
});
