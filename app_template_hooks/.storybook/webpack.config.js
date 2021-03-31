const path = require("path");

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      require.resolve("awesome-typescript-loader"),
      require.resolve("react-docgen-typescript-loader"),
    ]
  });
  config.module.rules.push({
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: [{
      loader: "babel-loader",
      options: {
        rootMode: "upward"
      }
    }],
  });
  config.module.rules.push({
    test: /\.s?css$/,
    use: ["style-loader", "raw-loader", "sass-loader"],
  });
  config.resolve.extensions.push(".ts", ".tsx", ".js", ".jsx");
  // config.resolve.alias = {
  //   ...config.resolve.alias,
  //   "@messages": path.resolve(__dirname, "../src/messages"),
  //   "@state": path.resolve(__dirname, "../src/state"),
  // };
  return config;
};
