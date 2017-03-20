const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackBrowserPlugin = require('webpack-browser-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'eval',
  entry: {
    app: [
      'react-hot-loader/patch',
      // activate HMR for React

      'webpack-dev-server/client?http://localhost:8080',
      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint

      'webpack/hot/only-dev-server',
      // bundle the client for hot reloading
      // only- means to only hot reload for successful updates

      path.join(__dirname, 'index')
      // the entry point of our app
    ]
  },
  output: {
    path: path.join(__dirname, 'public/'),
    filename: '[name].dev.js',
    publicPath: '/'
  },
  devServer: {
    hot: true,
    // enable HMR on the server

    contentBase: path.join(__dirname, '.'),
    // match the output path

    publicPath: '/',
    // match the output `publicPath`

    inline: true,
    compress: true
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?importLoaders=1',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer({
                  browsers: ['> 1%', 'ie >= 9']
                })
              ]
            }
          }
        ]
        // loader: ExtractTextPlugin.extract({
        //   fallback: 'style-loader',
        //   use: [
        //     'css-loader?importLoaders=1',
        //     {
        //       loader: 'postcss-loader',
        //       options: {
        //         plugins: [
        //           autoprefixer({
        //             browsers: ['> 1%', 'ie >= 9']
        //           })
        //         ]
        //       }
        //     }
        //   ]
        // })
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader?importLoaders=1',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer({
                  browsers: ['> 1%', 'ie >= 9']
                })
              ]
            }
          },
          'less-loader'
        ]
        // loader: ExtractTextPlugin.extract({
        //   fallback: 'style-loader',
        //   use: [
        //     'css-loader?importLoaders=1',
        //     {
        //       loader: 'postcss-loader',
        //       options: {
        //         plugins: [
        //           autoprefixer({
        //             browsers: ['> 1%', 'ie >= 9']
        //           })
        //         ]
        //       }
        //     },
        //     'less-loader'
        //   ]
        // })
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: 'file-loader?name=fonts/[name].[ext]'
      },
      {
        test: /\.(png|jpe?g?)(\?[a-z0-9=&.]+)?$/,
        use: 'file-loader?name=images/[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    // new ExtractTextPlugin({
    //   filename: '[name].dev.css',
    //   disable: false,
    //   allChunks: true
    // }),
    new WebpackBrowserPlugin({
      port: 8080,
      url: 'http://localhost'
    }),

  ],
  resolve: {
    extensions: ['.js', '.jsx', '.less']
  }
};
