const path = require("path");

module.exports = async ({ config }) => {
  //config.entry.push(projPath("./config/storybook/config.tsx"));
  config.externals = ["child_process", "fs"];
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: "ts-loader",
    exclude: /node_modules/,
    options: {
      transpileOnly: true,
      experimentalWatchApi: true,
    },
  });
  config.resolve.extensions.push(".ts", ".tsx");

  config.module.rules.push({
    test: /\.less$/,
    use: [
      {
        loader: "style-loader",
      },
      {
        loader: "css-loader", // translates CSS into CommonJS
      },
      {
        loader: "less-loader",
        options: {
          javascriptEnabled: true,
        },
      },
    ],
  });

  config.plugins = config.plugins.filter(p => p.constructor.name != "ProgressPlugin");

  return config;
};
