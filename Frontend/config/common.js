const HtmlWebpackPlugin = require("html-webpack-plugin");

const buildConfig = configDirs => {
  return {
    entry: {
      index: "./src/index.js"
      // dashboard: "./src/features/dashboard/index.js",
      // highcharts: "./src/features/highcharts/index.js"
    },
    // mode: "development",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader",
          options: { presets: ["@babel/env"] }
        }
      ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
      path: configDirs.BUILD_DIR,
      publicPath: "/dist/",
      filename: "bundle.js"
    },
    plugins: [new HtmlWebpackPlugin()]
  };
};

module.exports = buildConfig;
