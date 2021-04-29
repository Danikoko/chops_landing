export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Chops - Think Food. Think Us.',
    meta: [
      // <meta charset="utf-8">
      // <meta http-equiv="X-UA-Compatible" content="IE=edge">
      { charset: 'utf-8' },
      { 'http-quiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: 'Chops.NG. Quality delivery or takeaway food' },
      { name: 'author', content: 'Daniel Enamudu' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' }
    ],
    script: [
      { hid: 'jQuery', src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js', async: true },
      { hid: 'maps', src: 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=initMap', async: true, defer: true },
      { hid: 'sweetalerts', src: '//cdn.jsdelivr.net/npm/sweetalert2@10', async: true }
      // { hid: 'common_func', src: '/js/common_func.js', async: true },
      // { hid: 'common_func', src: '/js/common_join.js', async: true },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/bootstrap_customized.min.css',
    '~assets/css/style.css',
    '~assets/css/home.css',
    '~assets/css/custom.css',
    '~assets/css/blog.css',
    '~assets/css/order-sign_up.css',
    '~assets/css/error.css'
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
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
