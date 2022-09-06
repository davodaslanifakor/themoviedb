import { ALL_VIDEO } from '~/request/urls'

export const state = () => ({
  videoList: [],
  videoPagination: null
})
export const mutations = {
  SET_VIDEO_LIST: (state, data) => (state.videoList = data),
  SET_VIDEO_PAGINATION: (state, data) => (state.videoPagination = data)
}
export const actions = {
  async getVideoList ({ commit }, params) {
    try {
      const { results, total_results, total_pages, page } = await this.$api.get({
        url: ALL_VIDEO,
        params: {
          page: params?.page
        }
      })
      commit('SET_VIDEO_LIST', results)
      commit('SET_VIDEO_PAGINATION', { total_results, total_pages, page })
    } catch (e) {
      console.log(e)
    }
  }
}
