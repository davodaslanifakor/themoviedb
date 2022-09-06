<template>
  <div>
    <UiTheVideoList />
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  async asyncData ({ store, error }) {
    try {
      await store.dispatch('getAllGenres')
      await store.dispatch('videoList/getVideoList')
    } catch (e) {
      error(e)
    }
  }
}
</script>
