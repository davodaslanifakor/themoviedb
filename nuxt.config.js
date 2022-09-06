export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL,
    apiKey: process.env.API_KEY || 'not-api-key',
    configImage: process.env.CONFIG_IMAGE,
    imdbBaseUrlDetails: process.env.IMDB_BASE_URL_DETAIL
  },
  head: {
    title: 'themoviedb',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/request/apiFactory.js',
    '~/request/axios.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-lazysizes'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  // tailwindcss moudule config https://tailwindcss.nuxtjs.org/getting-started/setup
  tailwindcss: {
    cssPath: '~/assets/styles/tailwind.css'
  },
  lazySizes: {
    extendAssetUrls: {
      img: 'data-src',
      source: 'data-srcset',
      // Component with custom props
      AppImage: ['url', 'image-url']
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
