/* eslint-disable */
module.exports = {
  webpackConfig(env) {
      if (env === 'development') {
          return require('./internals/webpack/webpack.dev.babel.js');
      }
      return require('./internals/webpack/webpack.prod.babel.js');
    },
  components: './app/@(components|Components)/**/*.{js,jsx}',
};