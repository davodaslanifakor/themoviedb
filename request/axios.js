export default function ({ $axios, $config }) {
  $axios.onRequest((config) => {
    config.baseURL = $config.baseURL
    config.params = { ...config.params, api_key: $config.apiKey }
    return config
  })
  $axios.onResponse((response) => {
    return response
  })
  $axios.onError((err) => {
    return err
  })
}
