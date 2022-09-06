import { ALL_GENRES } from '~/request/urls'

export const state = () => ({
  genres: []
})
export const mutations = {
  SET_GENRES_LIST: (state, data) => (state.genres = data)
}

export const actions = {
  async getAllGenres ({ commit }) {
    try {
      const { genres } = await this.$api.get({ url: ALL_GENRES })
      commit('SET_GENRES_LIST', genres)
    } catch (e) {
      console.log(e)
    }
  }
}
