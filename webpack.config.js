const path = require('path');

module.exports = {
  devtool: 'cheap-source-map',
  entry: path.join(__dirname, './src/app.ts'),
  output: {
    filename: './dist/bundle.js',
    path: __dirname,
    devtoolModuleFilenameTemplate: '[absolute-resource-path]',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
