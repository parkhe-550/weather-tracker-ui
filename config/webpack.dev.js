const webpack = require('webpack');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const TARGET_PATH = `${__dirname.split("src")[0]}\\target\\WeatherInformation\\WEB-INF\\pages`

module.exports = merge(common, {
   mode: 'development',
   devtool: 'eval-cheap-module-source-map',
   output: {
      path: TARGET_PATH,
      filename: '[name].js'
   }
});
