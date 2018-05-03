/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const ExtractTextPlugin = require('extract-text-webpack-plugin')

exports.onCreateWebpackConfig = ({ config, stage }) => {
  console.log(stage)
  switch (stage) {
    case 'develop':
      // Remove postcss from Gatsby's dev process:
      config.removeLoader(`css`)
      config.loader(`css`, {
        test: /\.css$/,
        loaders: [`style`, `css`],
      })

      break

    case 'build-css':
      // Remove postcss from Gatsby's build process:
      config.removeLoader(`css`)
      config.loader(`css`, {
        test: /after-purgecss\/main\.css/,
        loader: ExtractTextPlugin.extract([`css?minimize`]),
      })

      break
  }
  return config
}
