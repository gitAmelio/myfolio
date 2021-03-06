const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  performance: {
    hints: false ,
   maxEntrypointSize: 512000,
   maxAssetSize: 512000
  },
  output: {
    filename: '[name].[contentHash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: './src/template.html',
        favicon: './src/assets/favicon.png',
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      })
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contentHash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, //3. Extract css into files
          'css-loader', //2. Turns css into commonjs
          // 'resolve-url-loader',
          'sass-loader'
        ] //1. Turns sass into css
        // test: /\.css$|\.scss$/,
        // include: path.resolve(__dirname, 'src'),
        // use: [
        //   { loader: 'css-loader', options: { url: false, importLoaders: 2, sourceMap: true }},
        //   { loader: 'resolve-url-loader', options: {  }},
        //   { loader: 'sass-loader', options: { sourceMap: true }},
        // ]
      }
    ]
  }
});
