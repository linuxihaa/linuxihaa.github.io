const withPWA = require('next-pwa')

module.exports = withPWA(
  {
    webpack: function (config) {
      config.module.rules.push(
        {
          test: /\.ya?ml$/,
          use: 'js-yaml-loader',
        },
      )
      return config
    },
    pwa: {
      dest: "public",
      register: true,
      skipWaiting: true
    }
  }
)


