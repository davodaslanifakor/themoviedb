<template>
  <div class="relative pb-[150%] w-32  overflow-hidden">
    <img
      class="absolute inset-0 lazyload object-cover "
      :data-src="$config.configImage + 'w185' + poster"
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
