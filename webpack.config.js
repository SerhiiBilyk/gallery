const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');
var APP_DIR = path.resolve(__dirname, './src');
var BUILD_DIR = path.resolve(__dirname, './dist');
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


var commonConfig = {
  entry: [
    /*for IE*/
    "babel-polyfill",
    APP_DIR + '/index.jsx'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        include: APP_DIR,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true,
                importLoaders: 3,
                localIdentName: '[local]___[hash:base64:5]',
                sourceMap: true,
                minimize:true
              }
            }, {
              loader: "postcss-loader",
              options: {
                sourceMap: true
              }
            }, {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }, {
              /*you don't need to import mixins inside each sass file
               * if there will be more then 1 path, create array of strings, resources:['path1','path2']*/
              loader: 'sass-resources-loader',
              options: {
                resources: APP_DIR + '/style/mixin.scss',
                sourceMap: true
              }
            }
          ]
        })
      }, {
        test: /\.(js|jsx)$/,
        include: APP_DIR,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'env', 'react'
            ],
            plugins: []
          }
        }
      }, {
        test: /\.(jpg|png|svg)$/,
        include: APP_DIR,
        loader: 'file-loader'
      }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [/*index.html generator*/
    //new HtmlWebpackPlugin({title:'webpack demo'})
/*
    new webpack.DefinePlugin({ //<--key to reduce React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),

    new webpack.optimize.UglifyJsPlugin(),
    new CompressionPlugin({asset: "[path].gz[query]", algorithm: "gzip", test: /\.js$|\.css$|\.html$/, threshold: 10240, minRatio: 0.8}),

    new OptimizeCssAssetsPlugin({
   assetNameRegExp: /\.optimize\.css$/g,
   cssProcessor: require('cssnano'),
   cssProcessorOptions: { discardComments: { removeAll: true } },
   canPrint: true
 }),
*/

   new ExtractTextPlugin("style.css")

  ]
}
const productionConfig = () => commonConfig;

const developmentConfig = () => {
  const config = {
    devServer: {
      historyApiFallback: true,
      stats: 'errors-only',
      host: process.env.HOST, // Defaults to `localhost`
      port: process.env.PORT, // Defaults to 8080
      contentBase: path.join(__dirname, './dist'),
      hot: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
  };

  return Object.assign({}, commonConfig, config);
};

module.exports = (env) => {
  console.log('env', env);
  return commonConfig;

  if (env === 'production') {
    return productionConfig();
  }
  return developmentConfig();
};
