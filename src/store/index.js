import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

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
    products: null,
    categories: null,
    isLoading: true,
    cart: [],
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    SET_CATEGORIES(state, data) {
      state.categories = data
    },
    SET_IS_LOADING(state, isLoading) {
      state.isLoading = isLoading
    },
    ADD_TO_CART(state, product) {
      state.cart.push(product)
    },
    INCREMENT_PRODUCT_QUANTITY(state, cartProduct) {
      cartProduct.quantity++
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get('https://fakestoreapi.com/products')
        const data = await response.data
        commit('SET_PRODUCTS', data);
      } catch (error) {
        console.log(error);
      } finally {
        commit('SET_IS_LOADING', false)
      }
    },
    async fetchCategories({ commit }) {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/categories')
        const data = await response.data
        commit('SET_CATEGORIES', data);
      } catch (error) {
        console.log(error);
      }
    },
    async fetchProductsByCategory({ commit }, category) {
      try {
        commit('SET_IS_LOADING', true)
        const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
        const data = await response.data
        commit('SET_PRODUCTS', data);
      } catch (error) {
        console.log(error);
      } finally {
        commit('SET_IS_LOADING', false)
      }
    },
    addToCart({ commit, state }, product) {
      const cartProduct = state.cart.find(p => p.id === product.id)
      if (!cartProduct) {
        commit('ADD_TO_CART', { ...product, quantity: 1 })
      } else {
        commit('INCREMENT_PRODUCT_QUANTITY', cartProduct)
      }
    }
  },
  modules: {
  }
})
