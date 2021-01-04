const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackPlugin,
  disableEsLint,
  addBabelPlugin,
} = require("customize-cra");
const AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin");

const path = require("path");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),

  addBabelPlugin(`effector/babel-plugin`),

  disableEsLint(),

  // addWebpackModuleRule({
  //   test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
  //   use: [
  //     {
  //       loader: "babel-loader",
  //     },
  //     {
  //       loader: "@svgr/webpack",
  //       options: {
  //         babel: false,
  //         icon: true,
  //       },
  //     },
  //   ],
  // }),

  // addWebpackAlias({
  //   "react-dom": "@hot-loader/react-dom",
  // }),

  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#49baac" },
  })

  //addWebpackPlugin(new AntdDayjsWebpackPlugin())

  // used to minimise bundle size by 500KB
  // function(config, env) {
  //   const alias = config.resolve.alias || {};
  //   alias["@ant-design/icons/lib/dist$"] = path.resolve(__dirname, "./icons.js");
  //   config.resolve.alias = alias;
  //   return config;
  // }
);
