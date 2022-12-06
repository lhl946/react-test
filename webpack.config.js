
const  HtmlWebpackPlugin = require( "html-webpack-plugin")
const webpack = require("webpack")
const path = require("path")

module.exports = {
    entry: './src/index.jsx',
    mode: 'development',
    devtool: 'source-map',
    devServer: {
      port: 9000
    },
    module: {
      rules: [
        {
          test: /.(js)|(jsx)$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        }
      ]
    },
    devServer: {
      port: '3300',
      host: 'localhost',
      client: {
        overlay: {
          errors: true,
          warnings: false,
        },
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html'
      }),
      new webpack.DefinePlugin({
        __DEV__: true,
        __PROFILE__: true,
        __EXPERIMENTAL__: true,
        __UMD__: true,
      })
    ],
    resolve: {
      alias: {
        react: path.resolve(__dirname, './packages/react'),
        shared: path.resolve(__dirname, './packages/shared'),
        scheduler: path.resolve(__dirname, './packages/scheduler'),
        'react-dom': path.resolve(__dirname, './packages/react-dom'),
        'react-reconciler': path.resolve(__dirname, './packages/react-reconciler'),
      }
    }
  }