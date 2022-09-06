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
      return this.$store.state['video-list'].videoList
    },
    pagination () {
      return this.$store.state['video-list'].videoPagination
    }
  },
  methods: {
    change (page) {
      this.$store.dispatch('video-list/getVideoList', { page })
    }
  }
}
</script>
