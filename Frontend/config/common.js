const HtmlWebpackPlugin = require('html-webpack-plugin');

const buildConfig = configDirs => {
  return {
    entry: {
      index: './src/index.js'
      // dashboard: "./src/features/dashboard/index.js",
      // highcharts: "./src/features/highcharts/index.js"
    },
    // mode: "development",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          options: { presets: ['@babel/env'] }
        }
      ]
    },
    resolve: {
      alias: {
        src: configDirs.ALIAS_PATH
      },
      extensions: ['*', '.js', '.jsx']
    },
    output: {
      path: configDirs.BUILD_DIR,
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html'
      })
    ]
  };
};

module.exports = buildConfig;
