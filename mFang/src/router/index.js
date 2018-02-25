import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    // 首页
    {
      path: '/',
      name: 'home',
      component: () => import('@/components/home/index'),
      children: [{
        path: '',
        component: () => import('@/components/common/tabbar')
      }]
    },
    // 申请
    {
      path: '/apply',
      name: 'apply',
      component: () => import('@/components/loan/apply')
    },
    // 产品列表
    {
      path: '/product',
      name: 'product',
      component: () => import('@/components/loan/product')
    },
    // 个人中心
    {
      path: '/person',
      name: 'person',
      component: () => import('@/components/person/index'),
      children: [{
        path: '',
        component: () => import('@/components/common/tabbar')
      }]
    },
    // 信用
    {
      path: '/credit',
      name: 'credit',
      component: () => import('@/components/person/credit/index')
    },
    // 还款列表
    {
      path: '/repayment',
      name: 'repayment',
      component: () => import('@/components/person/repayment/list')
    }
  ]
});
