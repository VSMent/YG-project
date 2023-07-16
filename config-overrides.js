// eslint-disable-next-line @typescript-eslint/no-var-requires
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = function override(config, env) {
  // New config, e.g. config.plugins.push...
  config.resolve.plugins.unshift(
    new TsconfigPathsPlugin({
      configFile: './tsconfig.json',
    })
  )

  return config
}
