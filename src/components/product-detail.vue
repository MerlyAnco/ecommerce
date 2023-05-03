<template>
    <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <!-- Fondo del modal -->
            <div class="fixed inset-0 transition-opacity" aria-hidden="true">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <!-- Contenedor del modal -->
            <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-20 sm:align-middle sm:max-w-2xl sm:w-full">
              <button @click="$emit('close')" class="absolute top-0 right-0 m-3 text-gray-600 hover:text-gray-900 focus:outline-none">
                    <span class="sr-only">Cerrar</span>
                    <ion-icon class="h-6 w-6" name="close"></ion-icon>
                </button>

            <div class="bg-white py-10 px-5">
                <div class="sm:flex sm:items-start">
                    <div class="mt-3 text-center grid grid-cols-3">
                        <div class="px-4">
                            <img :src="product.image" :alt="product.title"/>
                        </div>
                        <div class="col-span-2 px-4 text-left flex flex-col space-y-4">
                            <p class="text-md font-medium text-gray-500">{{ product.title }}</p>
                            <p class="text-xs"><span class="font-semibold">DESCRIPTION:</span> {{ product.description }}</p>
                            <div class="flex items-center space-x-3">
                                <div class="flex space-x-1 text-yellow-300">
                                  <ion-icon v-for="star in stars" :key=star class="w-3 h-3" name="star"></ion-icon>
                                </div>
                                <p class="text-xs">{{ product.rating.rate }} <span class="text-gray-400">( {{ product.rating.count }} vendidos )</span></p>
                            </div>
                            <p class="text-4xl font-bold">$ {{ product.price }}</p>
                            <hr/>
                            <button type="button" class="w-full inline-flex justify-center border border-transparent shadow-sm px-12 py-2 bg-orange-600 text-base font-medium text-white hover:bg-orange-700 sm:w-auto sm:text-sm" @click="addProduct">
                              AÑADIR AL CARRITO
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'modal-product-detail',
    props: {
        product: Object 
    },
    computed: {
        stars() {
          const rate = this.product.rating.rate;
          return rate < 1 ? 0 :
                rate < 2 ? 1 :
                rate < 3 ? 2 :
                rate < 4 ? 3 :
                rate < 5 ? 4 :
                rate === 5 ? 5 : 0;
        }
    },
    methods: {
      ...mapActions(['addToCart']),
      addProduct() {
        this.addToCart(this.product),
        setTimeout(() => {this.$emit('close')}, 2000)
      },
    }
}
</script>

<style>

</style>