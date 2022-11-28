const webpack = require('webpack');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
   mode: 'production',
   devtool: 'cheap-module-source-map',
   output: {
      path: path.join(__dirname, "../dist"),
      filename: '[name].[chunkhash:8].js'
   },
   plugins: [
      new MiniCssExtractPlugin()
   ]
});
