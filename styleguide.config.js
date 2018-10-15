/* eslint-disable */
module.exports = {
  webpackConfig(env) {
      if (env === 'development') {
          console.log(require('./internals/webpack/webpack.dev.babel.js'));
          return require('./internals/webpack/webpack.dev.babel.js');
      }
      return require('./internals/webpack/webpack.prod.babel.js');
    //   Object.assign({}, require('./internals/webpack/webpack.base.babel.js'))
    },
    // dangerouslyUpdateWebpackConfig(webpackConfig, env) {
    //   const reactBoilerplateWebConfigFile =  'webpack.' + (env === 'development' ? 'dev' : 'prod' ) + '.babel.js';
    //   const reactBoilerplateWebConfig = './internals/webpack/' + reactBoilerplateWebConfigFile;
    //     console.log(webpackConfig, reactBoilerplateWebConfig);
    //   return Object.assign(
    //     {},
    //     require(reactBoilerplateWebConfig),
    //     webpackConfig
    //   );
    // },
  components: './app/@(components|Components)/**/*.{js,jsx}',
};