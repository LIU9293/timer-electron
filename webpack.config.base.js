/**
 * Base webpack config used across other specific configs
 */

import path from 'path';
import webpack from 'webpack';
import paths from './paths';
import { dependencies as externals } from './app/package.json';

export default {
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: {
        loader: 'babel-loader',
        query: {
          plugins: [
            ['import', [{ libraryName: 'antd', style: true }]]
          ]
        }
      },
      exclude: /node_modules/,
    }, {
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader?{modifyVars:{"@primary-color":"rgb(73, 80, 87)"}}'
    }]
  },

  output: {
    path: path.join(__dirname, 'app'),
    filename: 'bundle.js',
    // https://github.com/webpack/webpack/issues/1114
    libraryTarget: 'commonjs2'
  },

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      path.join(__dirname, 'app'),
      'node_modules',
    ],
    alias: {
      // Support React Native Web
      // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
      /* eslint-disable */
      'react-native': 'react-native-web',
      'component': paths.appSrc + '/component',
      'container': paths.appSrc + '/container',
      'Redux': paths.appSrc + '/redux',
      'config': paths.appSrc + '/config',
      'public': paths.appPublic
    }
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
  ],

  externals: Object.keys(externals || {})
};
