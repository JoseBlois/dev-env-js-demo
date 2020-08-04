import path from 'path';
//webpack uses this object for configuration.. this  is just a rly simple set up
export default {
    debug: true,
    devtool: 'inline-source-map',
    noInfo: false,
    entry: [
      path.resolve(__dirname, 'src/index')// src/index.js you could pass webpack an array of entry forms
    ],
    target: 'web',
    output: {
        //where it should create the web bundle
      path: path.resolve(__dirname, 'src'),
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [],
    module: {
      loaders: [
        {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
        {test: /\.css$/, loaders: ['style','css']}
      ]
    }
  }