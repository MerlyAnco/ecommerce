export default {
  namespaced: true,
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
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
  },
  actions: {
    generateToken({ commit }, { email, password }) {
      const token = btoa(email + ":" + password);
      commit("SET_TOKEN", token);
      localStorage.setItem("token", token);
    },
  },
};
