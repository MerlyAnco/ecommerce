<template>
  <svg class="svg-icon">
    <use :href="require(`@/assets/img/${svgFile}.svg`) + `#${iconId}`" />
  </svg>
</template>

<script>
export default {
  name: "svg-icon",
  props: {
    iconId: {
      type: String,
      required: true,
    },
    svgFile: {
      type: String,
      default: "icons",
    },
  },
};
</script>
