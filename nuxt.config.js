module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'vue-reader',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
 css: [
  // 'element-ui/lib/.css/theme-chalresetk',
  'element-ui/lib/theme-chalk/index.css'
],

/*
** Add element-ui in our app, see plugins/element-ui.js file
*/
plugins: [
  '@/plugins/element-ui'
],
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
