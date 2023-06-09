export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ຮ້ານ ອາຫານແກ້ວມັງກອນ',
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
    { src: '~/plugins/aos.js', mode: 'client' },
    { src: '~/plugins/gsap.js', mode: 'client' },
    {src:'~/plugins/vue-particles.js', mode: 'client' },

  ],


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome',
  ],
  fontawesome: {
    component: 'Fa',
    suffix: false,
    icons: {
      solid: true,
      brands: true,
    },
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/tailwindcss',
    "@nuxtjs/axios",
 

  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
