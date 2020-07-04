<template>
  <div style="width: 100%; height: 100%">
    <div id="earthContainer" style="width: 100%; height: 100%"></div>
    <div style="position: absolute; left: 18px; top: 18px">
      <button>{{ message }}</button>
    </div>
  </div>
</template>

<script>
import Cesium from "Cesium"

var EarthComp = {
  data() {
    return {
      message: "页面加载于 " + new Date().toLocaleString()
    };
  },
  mounted() {
    this.createCesium();
  },
  methods:{
    createCesium() {
      window.viewer = new Cesium.Viewer("earthContainer");

      viewer.imageryLayers.removeAll();
      var googleLayerProvider = new Cesium.UrlTemplateImageryProvider({
        url: "http://www.google.cn/maps/vt?lyrs=s@800&x={x}&y={y}&z={z}",
        tilingScheme: new Cesium.WebMercatorTilingScheme,
        minimumLevel: 1,
        maximumLevel: 20,
        credit: "谷歌影像地图"
      });
      viewer.imageryLayers.addImageryProvider(googleLayerProvider);
    }
  }
};

export default EarthComp;
</script>