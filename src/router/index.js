import Vue from 'vue'
import Router from 'vue-router'
import News from '@/views/news'
import ErrorPage from '@/views/error-page/500'
Vue.use(Router)

export default new Router({
  routes: [
   {path: '/', redirect: 'news'},
   {path: '*', redirect: '/'},
   {path: '/error', component: ErrorPage},
   {path: '/news', component: News, name: 'news'}
  ]
})
