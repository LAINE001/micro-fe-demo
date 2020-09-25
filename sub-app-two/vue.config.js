const { name } = require('./package.json')

module.exports = {
  publicPath: '/',
  devServer: {
    port: '8072',
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },

  configureWebpack: {
    output: {
      library: 'sub-app-two',
      filename: '[name].js',
      libraryTarget: 'umd',

      globalObject: 'this'
    }
  }
}