export default {
    namespaced: true,
    state: {
      cart: [],
    },
    mutations: {
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
      addToCart({ commit, state }, product) {
        const cartProduct = state.cart.find((p) => p.id === product.id);
        if (!cartProduct) {
          commit("ADD_TO_CART", { ...product, quantity: 1 });
        } else {
          commit("INCREMENT_PRODUCT_QUANTITY", cartProduct);
        }
      },
    }
  };
  