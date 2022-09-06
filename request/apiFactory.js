const apiFactory = axios => ({
  get ({ url, params }) {
    return axios.$get(`${url}`, { params })
  }
})
export default ({ $axios }, inject) => {
  // Inject `api` key
  // -> app.$api
  // -> this.$api in vue components
  // -> this.$api in store actions/mutations
  const api = apiFactory($axios)
  inject('api', api)
}
