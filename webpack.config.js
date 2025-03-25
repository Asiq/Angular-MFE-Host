const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  // name: "microfrontend_host",

  remotes: {
    microfrontend_remote:
      "microfrontend_remote@http://localhost:4300/remoteEntry.js",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});

/*
const { ModuleFederationPlugin } = require("webpack").container;
const mf = require("@angular-architects/module-federation/webpack");
const share = mf.share;

module.exports = {
  output: {
    publicPath: "auto",
    scriptType: "text/javascript",
    library: {
      type: "module", // Ensures remoteEntry.js is treated as an ES module
    },
  },
  optimization: {
    runtimeChunk: false,
  },
  experiments: {
    outputModule: true, // Enables ES module output
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "microfrontend_host",
      remotes: {
        microfrontend_remote:
          "microfrontend_remote@http://localhost:4300/remoteEntry.js",
      },
      shared: share({
        "@angular/core": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/common": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/router": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/common/http": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
      }),
    }),
  ],
};*/
