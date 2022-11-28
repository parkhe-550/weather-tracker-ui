const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const stylesHandler = "style-loader";
module.exports = {
   context : __dirname,
   entry:[
      path.join(__dirname, "../src", "index.js")
   ],
   module: {
      rules: [
        {
          test: /\.?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
               presets: ['@babel/preset-env', '@babel/preset-react']
             }
          }
        },
        {
          test: /\.css$/i,
          use: [stylesHandler, "css-loader", "postcss-loader"],
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
          type: "asset",
        }
      ]
    },
    optimization: {
      minimizer: [
        new CssMinimizerPlugin(),
      ],
    },
   plugins: [
      new HtmlWebpackPlugin({
         //filename:'index.html',
        template: path.join(__dirname, "../public", "index.html"),
      }),
    ],
};
