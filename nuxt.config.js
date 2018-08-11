module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "Krakatoa - Internet Marketing Platform",
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: " Internet marketing project manager "
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/newfavicon.ico"
      },
      {
        href:
          "//cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css",
        rel: "stylesheet"
      }
    ]
  },
  css: [
    "element-ui/lib/theme-chalk/reset.css",
    "element-ui/lib/theme-chalk/index.css",
    "normalize.css",
    "~/assets/style/app.scss"
  ],
  modules: [["nuxt-sass-resources-loader", "~/assets/style/app.scss"]],
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: "#0396ff"
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    },
    postcss: {
      plugins: {
        "postcss-custom-properties": false
      }
    }
  },
  router: {
    linkActiveClass: "active"
  },
  plugins: [
    "@/plugins/element-ui"
    // "@/plugins/buefy"
  ]
};
