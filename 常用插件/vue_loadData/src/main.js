// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import base from './base.js'
import '@src/less/fivefu_phone.less'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'
Vue.use(VueAwesomeSwiper)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'static/mock/img/error.jpg',
  loading: 'static/mock/img/loading.gif',
  attempt: 1
})

Vue.use(MintUI)

Vue.config.productionTip = false
Vue.prototype.Base=base;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
