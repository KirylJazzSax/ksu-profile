module.exports = {
  "pluginOptions": {
    "i18n": {
      "locale": "en",
      "fallbackLocale": "en",
      "localeDir": "locales",
      "enableInSFC": true
    }
  },
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/ksu-profile/'
  //   : '/',
  publicPath: '/',
  configureWebpack: {
    devServer: {
        watchOptions: {
          aggregateTimeout: 300,
          poll: 1500
        },
    }
  }
}
