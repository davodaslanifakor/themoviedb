<template>
  <div class="relative pb-[150%] w-80  overflow-hidden">
    <img
      class="absolute inset-0 lazyload  object-cover rounded-xl"
      :data-src="imageSrc"
      :alt="alt"
    >
  </div>
</template>

<script>
export default {
  name: 'TheVideoDetailImage',
  props: {
    alt: {
      type: String,
      default: ''
    },
    imageSrc: {
      type: String,
      default: ''
    }
  }
}
</script>
