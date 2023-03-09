const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "app",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: "module" },

      // For remotes (please adjust)
      // name: "app",
      // filename: "remoteEntry.js",
      // exposes: {
      //     './Component': './/src/app/app.component.ts',
      // },    
      
      name: "app",
        filename: "remoteEntry.js",
        exposes: {
            './MicroFrontEndModule': './/src/app/microfrontend.module.ts',
        },        


      // For hosts (please adjust)
      // remotes: {
      //   "angular13": "https://dzurrahman.github.io/mfe-roki-test/remoteEntry.js",
      // },

      shared: share({
        "@angular/core": { singleton: true, strictVersion: false, },
        "@angular/common": { singleton: true, strictVersion: false, },
        "@angular/common/http": { singleton: true, strictVersion: false, },
        "@angular/router": { singleton: true, strictVersion: false, },
        "@capacitor/storage": { singleton: true, strictVersion: false, },

        ...sharedMappings.getDescriptors()
      })

    }),
    sharedMappings.getPlugin()
  ],
};
