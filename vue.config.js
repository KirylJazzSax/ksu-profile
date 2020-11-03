module.exports = {
  "pluginOptions": {
    "i18n": {
      "locale": "en",
      "fallbackLocale": "en",
      "localeDir": "locales",
      "enableInSFC": true
    }
  },
  configureWebpack: {
    devServer: {
        watchOptions: {
          aggregateTimeout: 300,
          poll: 1500
        },
    }
  }
}
