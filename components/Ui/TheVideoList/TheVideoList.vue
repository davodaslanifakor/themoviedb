<template>
  <div>
    <div class="mb-[119px]">
      <UiTheSearchBar />
    </div>
    <div class="video-list grid grid-cols-3 gap-x-16 gap-y-8">
      <UiTheVideoListItem
        v-for="video in videoList"
        :key="`vide=${video.id}`"
        :video="video"
      />
    </div>
    <div class="flex w-full justify-center my-28">
      <ElementVPagination
        v-if="pagination"
        :pagination="pagination"
        @change="change"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheVideoList',
  computed: {
    videoList () {
      return this.$store.state.videoList.videoList
    },
    pagination () {
      return this.$store.state.videoList.videoPagination
    }
  },
  methods: {
    setScrollTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    },
    change (page) {
      this.setScrollTop()
      this.$store.dispatch('videoList/getVideoList', { page })
    }
  }
}
</script>
