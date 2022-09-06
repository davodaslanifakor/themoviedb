<template>
  <div>
    <UiTheVideoList />
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  async asyncData ({ store }) {
    await store.dispatch('video-list/getVideoList')
  },
  mounted () {
    this.$store.dispatch('video-list/getVideoList')
  }
}
</script>
