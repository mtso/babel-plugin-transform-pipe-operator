const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'app'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          plugins: [
            '/Users/matthewtso/dev/src/github.com/mtso/react-pipe/src/index.js',
            // 'babel-plugin-pipe-operator',
          ],
          presets: [
            'env',
            'react',
            'stage-0',
          ],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
};
