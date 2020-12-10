const path = require('path');
const { merge } = require('webpack-merge');
const modeConfig = (env) => require(`./build-utils/webpack.${env.mode}`)(env);

module.exports = () =>
  merge({
    entry: path.join(__dirname, './src/app.ts'),
    output: {
      filename: './dist/bundle.js',
      path: __dirname,
    },
    module: {
      rules: [
        {
          test: /\.jp?g$/,
          use: 'url-loader',
        },
        {},
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
  });
