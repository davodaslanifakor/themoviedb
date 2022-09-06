<template>
  <div>
    <UiTheVideoList />
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  async asyncData ({ store }) {
    await store.dispatch('videoList/getVideoList')
  }
}
</script>
