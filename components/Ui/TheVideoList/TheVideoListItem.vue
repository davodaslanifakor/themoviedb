<template>
  <router-link
    :to="{name:'id',params: {id:video.id}}"
    class="video-list-item border border-gray-2 px-1 py-[3px] rounded-md flex bg-white-2"
  >
    <div class="mr-3">
      <UiTheVideoListItemImage :poster="video.poster_path" :alt="video.title" />
    </div>
    <div class="pt-4 pb-3 flex flex-col">
      <h3 class="font-roboto font-bold text-base leading-4 limitLine-one-line">
        {{ video.title }}
      </h3>
      <div class="flex items-center mt-auto mb-3">
        <ElementVIconCalendar />
        <span class="font-roboto text-xs font-normal text-gray-5 pl-2">{{ video.release_date }}</span>
      </div>
      <UiTheVideoListItemGenre v-if="genres.length" :genres="genres" />
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'TheVideoListItem',
  props: {
    video: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    genres () {
      const AllGenres = this.$store.state.genres
      const videoGenersId = this.video.genre_ids
      const result = []
      for (let i = 0; i < AllGenres.length; i++) {
        const item = AllGenres[i]
        if (videoGenersId.includes(item.id)) {
          result.push(item)
        }
      }
      return result
    }
  }
}
</script>
