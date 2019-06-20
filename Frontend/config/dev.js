const webpack = require("webpack");

module.exports = configDirs => {
  let devConfig = Object.assign({}, require("./common")(configDirs));
  devConfig = {
    ...devConfig,
    module: {
      ...devConfig.module,
      rules: [
        ...devConfig.module.rules,
        {
          test: /\.(css|scss)$/,
          use: ["style-loader", "css-loader", "sass-loader"]
        }
      ]
    },
    devServer: {
      contentBase: configDirs.APP_DIR,
      port: 3000,
      publicPath: "http://localhost:3000/dist/",
      watchContentBase: true,
      compress: true,
      hotOnly: true,
      historyApiFallback: true,
      open: true
    },
    plugins: [...devConfig.plugins, new webpack.HotModuleReplacementPlugin()]
  };
  return devConfig;
};
