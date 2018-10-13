'use strict';

const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const getClientEnvironment = require('./env');
const paths = require('./paths');
const HappyPack = require('happypack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const publicPath = '/';
const publicUrl = '';
const env = getClientEnvironment(publicUrl);
const theme = require('../package.json').theme;

module.exports = {
  mode: 'development',
  entry: [
    require.resolve('./polyfills'),
    require.resolve('react-dev-utils/webpackHotDevClient'),
    paths.appIndexJs,
  ],
  output: {
    pathinfo: true,
    filename: 'static/js/bundle.js',
    chunkFilename: 'static/js/[name].chunk.js',
    publicPath: publicPath,
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
  },
  resolve: {
    modules: ['node_modules', paths.appNodeModules].concat(
      process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
    ),
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
    alias: {
      'react-native': 'react-native-web',
        'actions': path.resolve(__dirname, '../src/actions'),
        'components': path.resolve(__dirname, '../src/components'),
        'pages': path.resolve(__dirname, '../src/pages'),
        'reducers': path.resolve(__dirname, '../src/reducers'),
        'utils': path.resolve(__dirname, '../src/utils'),
        'routers': path.resolve(__dirname, '../src/routers'),
        'assets': path.resolve(__dirname, '../src/assets')
    },
    plugins: [
      new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),
    ],
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              formatter: eslintFormatter,
              eslintPath: require.resolve('eslint')
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
        include: paths.appSrc,
      },
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg/],
            loader: require.resolve('url-loader'),
            options: {
              limit: 1000,
              name: 'static/images/[name].[hash:8].[ext]',
            },
          },
          {
            test: /\.(js|jsx|mjs)$/,
            include: paths.appSrc,
            loader: 'happypack/loader',
            options: {
              cacheDirectory: true,
            },
          },
          {
            test: /\.(less)$/,
            include: /node_modules\/antd-mobile/,
            use: [
              'style-loader',
              'css-loader',
              { loader: 'less-loader', options: {javascriptEnabled:true,modules: false, modifyVars: theme} }
            ]
          },
          {
            test: /\.(less|css)$/,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                  modules: true,
                  localIdentName: '[local]--[hash:base64:5]'
                },
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  ident: 'postcss',
                  plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    autoprefixer({
                      browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9', // React doesn't support IE8 anyway
                      ],
                      flexbox: 'no-2009',
                    }),
                      require('postcss-pxtorem')({
                          rootValue: 75,
                          propList: ['*']
                      }),
                      require('precss')
                  ],
                },
              },
                require.resolve('less-loader')
            ],
          },
          {
            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
            loader: require.resolve('file-loader'),
            options: {
              name: 'static/css/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
        hash: true,
      template: paths.appHtml,
    }),
    new HappyPack({
      use: [{
        path: 'babel-loader',
        query: {
          plugins: [
            require.resolve('@babel/plugin-transform-runtime'),
            ["@babel/plugin-proposal-decorators", { "legacy": true }],
            require.resolve('@babel/plugin-syntax-dynamic-import'),
            require.resolve('@babel/plugin-proposal-class-properties')
          ],
          presets: [
            require.resolve('@babel/preset-env'),
            require.resolve('@babel/preset-react')
          ],
          cacheDirectory: false
        }
      }],
      threads: 2
    }),
    new ProgressBarPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin(env.stringified),
    new webpack.HotModuleReplacementPlugin(),
    new CaseSensitivePathsPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  performance: {
    hints: false,
  },
};
