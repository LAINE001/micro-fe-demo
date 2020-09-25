const { name } = require('./package.json')

module.exports = {
  publicPath: '/',
  devServer: {
    port: '8071',
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },

  configureWebpack: {
    output: {
      library: 'sub-app-one',
      filename: '[name].js',
      libraryTarget: 'umd',

      globalObject: 'this'
    }
  }
}