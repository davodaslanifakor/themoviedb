<template>
  <div class="relative pb-[150%] w-32">
    <img
      class="absolute inset-0"
      :src="$config.configImage + 'w185' + poster"
      :alt="alt"
    >
  </div>
</template>

<script>
export default {
  name: 'TheVideoListItemImage',
  props: {
    alt: {
      type: String,
      default: ''
    },
    poster: {
      type: String,
      default: ''
    }
  }
}
</script>
