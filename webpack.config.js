
module.exports = {
  entry: './react/entry.js',

  output: {
    filename: 'bundle.js',
    path: __dirname + '/react',
    publicPath: '/react'
  },

  module: {
    loaders: [
      { test: /(\.js$|\.jsx$)/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader!cssnext-loader' }
    ]
  },

  cssnext: {
    compress: true,
    features: {
    }
  }

}

