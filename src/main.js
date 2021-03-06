// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'static/css/index.scss'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.config.productionTip = false
// Vue.prototype.HOST = '/api/'
Vue.use(ElementUI)
Vue.use(NProgress)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
