const path = require("path");
const APP_DIR = path.join(__dirname, "public/");
const BUILD_DIR = path.resolve(__dirname, "dist/");

const configDirs = {
  BUILD_DIR: BUILD_DIR,
  APP_DIR: APP_DIR
};

const buildConfig = env => {
  if (env === "dev" || env === "prod") {
    return require("./config/" + env + ".js")(configDirs);
  } else {
    console.log(
      "Wrong webpack build parameter. Possible choices: 'dev' or 'prod'."
    );
  }
};
module.exports = buildConfig;
