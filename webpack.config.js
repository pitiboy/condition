const path = require('path');
const webpack = require('webpack'); // eslint-disable-line
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const pkg = require('./package.json');

// ========== CONFIG ===========
const NODE_ENV = process.env.NODE_ENV;
const IS_PRODUCTION = NODE_ENV === 'production';
const INPUTFOLDER = process.env.INPUTFOLDER || 'build';


// =========== RULES ===========
const rules = [];

// Add image and font loader
rules.push({
  test: /\.(?:png|jpg|svg|otf|ttf)$/,
  use: [{ loader: 'url-loader' }],
});

// Transpile modern ES2017 / JSX with Babel - required for 'build'
rules.push({
  test: /\.jsx?$/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: [
          'react',
          ['env', {
            targets: {
              ie: 9,
            },
          }],
        ],
        plugins: [
          'transform-decorators-legacy',
          'transform-class-properties',
        ],
      },
    },
  ],
});

// Sass + CSS-Modules support
rules.push({
  test: /^((?!\.global).)*\.scss$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use:
    [
      {
        loader: 'css-loader',
        options: {
          sourceMap: !IS_PRODUCTION,
          modules: true,
          localIdentName: '[name]_[local].[hash:base64:3]',
          importLoaders: true,
        },
      },
      { loader: 'sass-loader' },
    ],
  }),
});

// Global stylesheets should keep their initial classname
rules.push({
  test: /(\.global\.scss|(.*)\.css)$/,
  use: [
    { loader: 'style-loader' },
    {
      loader: 'css-loader',
      options: {
        sourceMap: !IS_PRODUCTION,
        modules: true,
        localIdentName: '[local]',
        importLoaders: true,
      },
    },
    { loader: 'sass-loader' },
  ],
});

// Js linting with eslint
rules.push({
  enforce: 'pre',
  test: /\.js$/,
  loader: 'eslint-loader',
  exclude: /node_modules/,
});

// ========== PLUGINS ==========

const plugins = [];

// Support older plugins by passing options the pre webpack 2 way
plugins.push(new webpack.LoaderOptionsPlugin({
  minimize: IS_PRODUCTION,
  debug: !IS_PRODUCTION,
  options: {
    sassLoader: {
      data: `@import "${path.resolve(__dirname, './examples/theme/config.scss')}";`,
    },
    context: '/',
  },
}));

// Minify Javascript for production
if (IS_PRODUCTION) {
  if (IS_PRODUCTION) {
    plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
  }

  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      screw_ie8: true,
      conditionals: true,
      unused: true,
      comparisons: true,
      sequences: true,
      dead_code: true,
      evaluate: true,
      if_return: true,
      join_vars: true,
    },
    output: {
      comments: false,
    },
  }));
}

const environmentOptions = {
  IS_PRODUCTION,
  name: pkg.name,
  title: pkg.description,
  description: `${pkg.name} v${pkg.version}: ${pkg.description} `,
  application: {
    name: JSON.stringify(pkg.name),
    title: JSON.stringify(`${pkg.name} v${pkg.version}`),
    version: JSON.stringify(pkg.version),
    description: JSON.stringify(pkg.description),
    homepage: JSON.stringify(pkg.homepage),
  },
  homepage_test: JSON.stringify(pkg.homepage_test),
  homepage_dev: JSON.stringify(pkg.homepage_dev),

};
plugins.push(new ExtractTextPlugin({ filename: `${pkg.name}_${pkg.version}.css?release=${new Date().getTime()}` }));


plugins.push(new webpack.DefinePlugin({ ENV: environmentOptions }));

plugins.push(new HtmlWebpackPlugin(Object.assign({
  template: IS_PRODUCTION ? './examples/theme/index.template.ejs' : './examples/theme/index.template.ejs',
  inject: 'body',
}, environmentOptions)));
plugins.push(new HtmlWebpackPlugin(Object.assign({
  template: IS_PRODUCTION ? './examples/theme/index.template.ejs' : './examples/theme/index.template.ejs',
  filename: '200.html',
  inject: 'body',
}, environmentOptions)));


const config = {
  entry: {
    app: [
      'babel-polyfill',
      pkg.main,
    ],
  },
  output: {
    path: path.resolve(__dirname, INPUTFOLDER),
    publicPath: '/',
    filename: `${pkg.name}_${pkg.version}.js?release=${new Date().getTime()}`,
  },
  module: {
    rules,
  },
  plugins,
  devServer: Object.assign({
    // port: coming from package.json
    historyApiFallback: true,
    host: '0.0.0.0', // Make the dev server accessible for virtual machines
  }, pkg.homepage_dev),
};

if (!IS_PRODUCTION) {
  config.devtool = 'cheap-module-source-map';
  config.performance = {
    hints: IS_PRODUCTION,
  };
}

module.exports = config;
