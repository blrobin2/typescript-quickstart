module.exports = {
  entry: './src/app.tsx',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  resolve: {
    // Add .ts .tsx as a resolvable extension.
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  }
}