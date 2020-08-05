import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
//webpack uses this object for configuration.. this  is just a rly simple set up
export default {
    debug: true,
    devtool: 'source-map',
    noInfo: false,
    entry: [
      path.resolve(__dirname, 'src/index')// src/index.js you could pass webpack an array of entry forms
    ],
    target: 'web',
    output: {
        //where it should create the web bundle
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [
      //Creates HTML file that includes refenerence to bundled JS.
      new HtmlWebpackPlugin({
        template : 'src/index.html',
        inject: true
      }),
      //Eliminate duplicate packagades when generating bundle
      new webpack.optimize.DedupePlugin(),
      //Minify JS
      new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
      loaders: [
        {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
        {test: /\.css$/, loaders: ['style','css']}
      ]
    }
  }