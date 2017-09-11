const webpack = require('webpack');
const { resolve } = require('path');

module.exports = {

  entry: [
    resolve(_dirname, "src") + "index.jsx"
  ],

  output: {
    filename: 'app.bundle.js',
    path: resolve(_dirname, 'build'),
  },

  resolve: {
    extensions: ['.js', '.jsx']
  }

};
