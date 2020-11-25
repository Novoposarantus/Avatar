let HtmlWebpackPlugin = require('html-webpack-plugin');
let HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = {
  configureWebpack: process.env.NODE_ENV === 'production'
  ? {
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',  //template file to embed the source
        inlineSource: '.(js|css)$' // embed all javascript and css inline
      }),
      new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin)
    ]
  }
  : {}
}