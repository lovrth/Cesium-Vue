import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;


if (typeof Cesium !== 'undefined'){
  new Vue({
    render: h => h(App),
  }).$mount('#app')
}
