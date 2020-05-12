const fs = require("fs");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackShellPlugin = require("webpack-shell-plugin");
const lessToJs = require("less-vars-to-js");
const { useBabelRc, override } = require("customize-cra");

const themeVariables = lessToJs(
  fs.readFileSync(path.join(__dirname, "src/styles/ant-vars.less"), "utf8")
);

module.exports = (config) => {
  config.module.rules.push({
    test: /\.(less)$/,
    use: [
      MiniCssExtractPlugin.loader,
      "css-loader",
      {
        loader: "less-loader",
        options: {
          modifyVars: themeVariables,
          javascriptEnabled: true,
        },
      },
    ],
  });

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: "astroturf/loader",
        options: { extension: ".module.scss" },
      },
    ],
  });

  config.plugins.push(new MiniCssExtractPlugin());

  // if (process.env.NODE_ENV !== "production" && false) {
  //   config.plugins.push(
  //     new WebpackShellPlugin({
  //       onBuildEnd: ["nodemon server.js --watch server.js --watch mainRoutes"],
  //       dev: true,
  //     })
  //   );
  // }
  return override(useBabelRc())(config);
};
