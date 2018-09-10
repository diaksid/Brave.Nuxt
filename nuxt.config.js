require('./config');
const config = require('config');
const nodeExternals = require('webpack-node-externals');

const isWin = /^win/i.test(process.platform);

const nuxt = {
  mode: 'spa',

  env: {
    RECAPTCHA: config.get('recaptcha')
  },

  head: {
    titleTemplate: '%s · Храбров А. П.',
    link: [
      {
        rel: 'stylesheet',
        // href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
        href: 'https://fonts.googleapis.com/css?family=Material+Icons'
      }
    ]
  },

  css: [
    '~/assets/stylesheets/app.styl'
  ],

  loading: {
    color: '#3B8070'
  },

  modules: [
    '@nuxtjs/auth',
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],

  plugins: [
    '~/plugins/axios.js',
    '~/plugins/vue-lazyload.js',
    '~/plugins/vue-lightbox.js',
    '~/plugins/vuetify.js'
  ],

  axios: {
    https: !isWin,
    host: isWin ? 'localhost' : config.get('domain'),
    port: isWin ? 3000 : 443,
    prefix: '/api/v1',
    credentials: true,
    debug: false
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/auth/login',
            method: 'post',
            propertyName: 'token'
          },
          logout: {
            url: '/auth/logout',
            method: 'post'
          },
          user: {
            url: '/auth/user',
            method: 'get',
            propertyName: 'user'
          }
        },
        tokenRequired: true,
        tokenType: 'bearer'
      }
    }
  },

  icon: {
    iconSrc: 'static/images/icon.png'
  },

  meta: {
    lang: 'ru',
    name: 'Персональный сайт',
    description: 'Персональный сайт индивидуального предпринимателя А. П. Храброва',
    ogHost: process.env.HOSTNAME
  },

  manifest: {
    lang: 'ru',
    name: 'Индивидуальный предприниматель А. П. Храбров',
    short_name: 'ИП Храбров А. П.',
    description: 'Персональный сайт индивидуального предпринимателя А. П. Храброва'
  },

  build: {
    babel: {
      presets ({isServer}) {
        return [
          ['vue-app', {
            useBuiltIns: true,
            targets: isServer ? {node: 'current'} : {ie: 11, uglify: true}
          }]
        ]
      },
      plugins: [
        ['transform-imports', {
          'vuetify': {
            'transform': 'vuetify/es5/components/${member}',
            'preventFullImport': true
          }
        }]
      ]
    },

    vendor: [
      '~/plugins/vue-lazyload.js',
      '~/plugins/vue-lightbox.js',
      '~/plugins/vuetify.js'
    ],

    extractCSS: {
      allChunks: true
    },

    cssSourceMap: false,

    extend (config, {isClient, isServer, isDev}) {
      if (isClient) {
        if (isDev) {
          config.entry.vendor.unshift('eventsource/lib/eventsource-polyfill');
          config.module.rules.push({
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/
          })
        }
        config.entry.vendor.unshift('@babel/polyfill')
      }
      if (isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
    }
  },

  serverMiddleware: [
    '~/api/'
  ]
};

if (config.has('yandex.metrika')) {
  nuxt.modules.push(['@nuxtjs/yandex-metrika', {
    id: config.get('yandex.metrika'),
    webvisor: true,
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    useCDN: false
  }])
}

if (config.has('oneSignal')) {
  nuxt.modules.push('@nuxtjs/onesignal');
  nuxt.oneSignal = {
    init: {
      appId: config.get('oneSignal'),
      allowLocalhostAsSecureOrigin: true,
      welcomeNotification: {
        disable: false
      }
    },
    cdn: true
  }
}

module.exports = nuxt;
