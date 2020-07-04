const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  configureWebpack: config => {
    config["externals"] = {
      Cesium: "Cesium"
    };
    const cwp = new CopyWebpackPlugin([
      {
        from: './node_modules/cesium/Build/CesiumUnminified', //调试时，将Cesium换成CesiumUnminified
        to: 'js/Cesium',
        toType: 'dir'
      }
    ]);
    config.plugins.push(cwp);
  }
};