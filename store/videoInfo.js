import { CREDITS, MOVIE_DETAILS } from '~/request/urls'

export const state = () => ({
  videoDetails: null,
  videoCredits: null
})
export const mutations = {
  SET_VIDEO_DETAILS: (state, data) => (state.videoDetails = data),
  SET_VIDEO_CREDITS: (state, data) => (state.videoCredits = data)
}
export const actions = {
  async getVideoDetails ({ commit }, params) {
    try {
      const res = await this.$api.get({
        url: MOVIE_DETAILS({ movieId: params.id })
      })
      commit('SET_VIDEO_DETAILS', res)
      return Promise.resolve(res)
    } catch (e) {
      return Promise.reject(e)
    }
  },
  async getVideoCredits ({ commit }, params) {
    try {
      const res = await this.$api.get({
        url: CREDITS({ movieId: params.id })
      })
      commit('SET_VIDEO_CREDITS', res)
      return Promise.resolve(res)
    } catch (e) {
      return Promise.reject(e)
    }
  }
}
