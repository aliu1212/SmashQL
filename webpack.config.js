var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',
        // exclude: /node_modules/, 
        // use: [ { loader: 'graphql-tag/loader' }],
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      { test: /\.flow$/, 
        loader: 'ignore-loader' 
      }
    ]
  }
};