<template>
  <component v-bind="attrs" :is="tag" class="v-button inline-block rounded-full px-3 py-1.5">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    tag: {
      type: String,
      default: 'button',
      validator (value) {
        // The value must match one of these strings
        return ['nuxt-link', 'a', 'button'].includes(value)
      }
    },
    to: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    attrs () {
      if (this.tag === 'nuxt-link') {
        return { to: this.to }
      }
      if (this.tag === 'a') {
        return { href: this.to }
      }
      return null
    }
  }
}
</script>
