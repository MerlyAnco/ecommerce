<template>
  <footer
    class="md:hidden bg-white shadow-lg border-t-2 border-orange-500 py-4 flex flex-row justify-between px-5 fixed-bottom"
  >
    <div>
        <a
          href="/"
          class="block mx-auto md:mx-0 md:mr-4 text-gray-700 hover:text-gray-900"
        >
        <ion-icon name="home-outline"></ion-icon>
          Home
        </a>
    </div>
    <div class="flex flex-row space-x-5">
        <a
          href="/cart"
          class="block mx-auto md:mx-0 md:mr-4 text-gray-700 hover:text-gray-900"
        >
        <ion-icon name="cart-outline"></ion-icon>
          Cart
        </a>
        <a
          href="/logout"
          class="block mx-auto md:mx-0 text-gray-700 hover:text-gray-900"
        >
        <ion-icon name="exit-outline"></ion-icon>
        </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "nav-bar-footer",
};
</script>

<style></style>
