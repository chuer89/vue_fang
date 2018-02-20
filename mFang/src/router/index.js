import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/home/index'),
      children: [{
        path: '',
        component: () => import('@/components/common/tabbar')
      }]
    },

    {
      path: '/apply',
      name: 'apply',
      component: () => import('@/components/loan/apply')
    },

    {
      path: '/product',
      name: 'product',
      component: () => import('@/components/loan/product')
    },

    {
      path: '/person',
      name: 'person',
      component: () => import('@/components/person/index'),
      children: [{
        path: '',
        component: () => import('@/components/common/tabbar')
      }]
    }
  ]
});
