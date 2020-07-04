const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  configureWebpack: config => {
    config["externals"] = {
      Cesium: "Cesium"
    };
    const cwp = new CopyWebpackPlugin([
      {
        from: './node_modules/cesium/Build/CesiumUnminified', //部署时，将CesiumUnminified换成Cesium
        to: 'js/Cesium',
        toType: 'dir'
      }
    ]);
    config.plugins.push(cwp);
  }
};