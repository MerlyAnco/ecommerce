<template>
  <section
    class="container content-area mx-auto px-5 flex flex-col space-y-4 lg:grid lg:grid-cols-3 lg:space-x-4 lg:space-y-0 pt-5 pb-24"
  >
    <div
      class="col-span-2 flex flex-col justify-center bg-white py-6 px-3 h-fit"
    >
      <p class="text-2xl font-bold text-left mb-4 text-gray-900">
        Article Summary  ({{ cart.length }})
      </p>
      <div
        v-if="cart.length !== 0"
        class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"
      >
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div
            class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
          >
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <StyledTh scope="col">Article</StyledTh>
                  <StyledTh scope="col">Price</StyledTh>
                  <StyledTh scope="col">Quantity</StyledTh>
                  <StyledTh scope="col">Total</StyledTh>
                </tr>
              </thead>
              <tbody class="bg-white">
                <template v-for="(item, index) in cart">
                  <tr :key="'title-' + index">
                    <td
                      colspan="4"
                      class="text-sm text-gray-400 px-6 pt-4 whitespace-nowrap text-left"
                    >
                      {{ item.title }}
                    </td>
                  </tr>
                  <tr :key="'items-' + index" class="border-b border-gray-200">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="">
                          <img
                            class="h-24 w-auto"
                            :src="item.image"
                            alt="Artículo"
                          />
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-lg text-gray-900">
                        $ {{ item.price }}
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap items-center">
                      <div class="flex justify-around">
                        <div
                          class="flex justify-between items-center space-x-3"
                        >
                          <button @click="decrement(item)" class="icon-add">
                            -
                          </button>
                          <p class="p-2 border">{{ item.quantity }}</p>
                          <button @click="increment(item)" class="icon-add">
                            +
                          </button>
                        </div>
                        <button class="flex items-center" @click="remove(item)">
                          <ion-icon
                            class="w-6 h-6"
                            name="trash-outline"
                          ></ion-icon>
                        </button>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-lg text-gray-900">
                        $ {{ item.price * item.quantity }}
                      </div>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div v-else>
        <img
          class="w-auto max-h-32 grayscale mx-auto"
          src="../assets/img/bag.png"
          alt="bolsa vacia"
        />
        <p class="text-xl font-bold">YOUR BAG IS EMPTY!</p>
        <button class="button-primary w-auto px-8 py-2" @click="goToShop">
          Buy Now
        </button>
      </div>
    </div>
    <div class="shadow text-left p-5 flex flex-col space-y-6 bg-white h-fit">
      <p class="text-lg font-bold text-gray-900">Order Summary</p>
      <div class="flex justify-between">
        <p class="text-sm">Subtotal</p>
        <p class="text-3xl font-bold">$ {{ total }}</p>
      </div>
      <button
        class="w-full px-8 py-2 font-semibold"
        :class="[
          cart.length == 0
            ? 'bg-gray-400 text-gray-900'
            : 'bg-orange-500 text-white',
        ]"
      >
        Pay Now
      </button>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import styled from 'vue-styled-components';

const StyledTh = styled.th`
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  color: #717171;
  letter-spacing: 0.05em;
  padding: 0.75rem 1.5rem;
`;

export default {
  components: {
    StyledTh
  },
  created() {
    const cart = JSON.parse(localStorage.getItem("cart"));

    if (cart) {
      this.$store.commit("SET_CART", cart);
    }
  },
  computed: {
    ...mapState(["cart"]),
    total() {
      return this.cart.reduce((accumulator, product) => {
        let total = accumulator + product.price * product.quantity
        return Number(total.toFixed(2));
      }, 0);
    },
  },
  methods: {
    ...mapMutations({
      increment: "INCREMENT_PRODUCT_QUANTITY",
      decrement: "DECREMENT_PRODUCT_QUANTITY",
      remove: "DELETE_PRODUCT_OF_CART",
      setCart: "SET_CART",
    }),
    goToShop() {
      this.$router.push("/home");
    },
  },
};
</script>

<style></style>
