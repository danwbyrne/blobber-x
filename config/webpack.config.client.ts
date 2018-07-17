import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import { optimize } from 'webpack';

module.exports = {
  mode: 'development',
  target: 'web',
  devtool: 'inline-source-map',
  entry: './src/client/index.tsx',
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'bundle.ts',
  },
  module: {
    rules: [
      {
        test: /.test.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
            plugins: ['transform-class-properties'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/assets/index.html',
      filename: 'index.html',
      favicon: 'src/client/assets/favicon.ico',
    }),
    new optimize.ModuleConcatenationPlugin(),
  ],
};
