<template>
  <div class="movie-credits">
    <UiTheVideoDetailTitle :title="videoInfo.title" :pre-title="videoInfo.preTitle" />
    <div class="flex mt-16">
      <div class="mr-16">
        <UiTheVideoDetailImage :image-src="videoInfo.image" />
      </div>
      <div class="w-full">
        <UiTheVideoDetailInformation :general-info="videoInfo.generalInfo" />
      </div>
    </div>
    <div class="mt-16">
      <UiTheVideoDetailDescription :content="videoInfo.overview" />
    </div>
    <div class="mt-20 mb-16">
      <UiTheVideoDetailCredit :credits="videoInfo.credits" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieId',
  async asyncData ({ store, params }) {
    await store.dispatch('videoInfo/getVideoDetails', { id: params.id })
    await store.dispatch('videoInfo/getVideoCredits', { id: params.id })
  },
  computed: {
    videoInfo () {
      const videoDetails = this.$store.state.videoInfo.videoDetails
      const videoCredits = this.$store.state.videoInfo.videoCredits
      return {
        image: this.$config.configImage + 'w300' + videoDetails?.poster_path,
        title: videoDetails?.title,
        preTitle: videoDetails?.tagline,
        generalInfo: {
          budget: this.setCurrency(videoDetails?.budget),
          revenue: this.setCurrency(videoDetails?.revenue),
          releaseDate: videoDetails?.release_date,
          runtime: videoDetails?.Runtime || '00:00:00',
          score: {
            average: videoDetails?.vote_average || '0',
            count: videoDetails?.vote_count || '0'
          },
          genres: videoDetails?.genres.map(g => g.name).join(','),
          imdbLink: this.$config.imdbBaseUrlDetails + videoDetails?.imdb_id,
          homePageLink: videoDetails?.homepage

        },
        overview: videoDetails?.overview,
        credits: this.sortByPopularity([...videoCredits.cast])
      }
    }
  },
  methods: {
    setCurrency (value) {
      if (!value) { return '00' }
      return '$' + Intl.NumberFormat('en-US').format(value)
    },
    sortByPopularity (array) {
      return array.sort((a, b) => {
        return a.popularity + b.popularity
      }).slice(0, 10)
    }
  }
}
</script>
