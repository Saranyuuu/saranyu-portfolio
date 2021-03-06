const colors = require('vuetify/es5/util/colors').default

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    title: 'Saranyu Siriphat',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  router: {
    middleware: 'i18n'
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    {
      src: '~/assets/font.css'
    }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/i18n.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/pwa'
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  workbox: {
    runtimeCaching: [
      {
        urlPattern: 'https://my-cdn.com/.*',
        handler: 'cacheFirst',
        method: 'GET'
      }
    ]
  },
  icons: {
    /* icon options */
  },
  manifest: {
    name: 'Nattawat-s.com',
    lang: 'en'
  },
  generate: {
    routes: [ '/', '/th' ]
  }
}
