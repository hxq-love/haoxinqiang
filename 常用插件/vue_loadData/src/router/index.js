import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import lists from '@/components/list.vue'

import mescrollComponent from '@/components/mescroll-component.vue'
import mescrollMore from '@/components/mescroll-more.vue'

import mescrollSwiper from '@/components/mescroll-swiper.vue'
import imglazy from '@/components/imglazy.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: imglazy
    },
     {
      path: '/mescrollComponent',
      component: mescrollComponent
    },
     {
      path: '/mescrollMore',
      component: mescrollMore
    },
     {
      path: '/mescrollSwiper',
      component: mescrollSwiper
    }
  ]
})
