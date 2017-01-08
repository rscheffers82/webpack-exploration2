var webpack = require('webpack');
var path = require('path');

const VENDOR_LIBS = [
  'faker','lodash','react','react-dom','react-input-range',
  'react-redux','react-router', 'redux', 'redux-form', 'redux-thunk'
];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
    // [name].js: [name] will be replaced by the entry names
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        // css-loader loads all CSS
        // style-loader places all CSS code into a style tag in bundle.js
        use: ['style-loader', 'css-loader'],
        test: /\.css$/
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ]
};
