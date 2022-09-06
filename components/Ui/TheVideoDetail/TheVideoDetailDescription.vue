<template>
  <div class="font-roboto text-base font-normal text-black-2 leading-5" v-html="content" />
</template>

<script>
export default {
  name: 'TheVideoDetailDescription',
  props: {
    content: {
      type: String,
      default: ''
    }
  }
}
</script>
