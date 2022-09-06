<template>
  <div>
    <UiTheVideoList />
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  async asyncData ({ store }) {
    await store.dispatch('getAllGenres')
    await store.dispatch('videoList/getVideoList')
  }
}
</script>
