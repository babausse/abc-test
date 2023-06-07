export default {
  ssr: true,
  target: 'server',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'abc-testing',
    htmlAttrs: {
      lang: 'en'
    },
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
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'cookie-universal-nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.unshift({
        name: 'legacy-ref',
        path: '/neuf/:ref',
        component: resolve(__dirname, 'pages/_bien/_ref.vue')
      });
      routes.unshift({
        name: 'immersion-ref',
        path: '/neuf/*-3D',
        component: resolve(__dirname, 'pages/neuf/_ref.vue')
      });
      routes.unshift({
        name: 'immersion-ref-1',
        path: '/neuf/*-3D1',
        component: resolve(__dirname, 'pages/neuf/_ref.vue')
      });
    }
  }
}
