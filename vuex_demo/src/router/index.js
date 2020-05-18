import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    // path: '/pubPage/:id',
    path: '/pubPage',
    name: 'Pubpage',
     // ES 路由懒加载
      component: () => import(/* webpackChunkName: "pub" */ '../views/PubPage.vue'),
     // vue异步组件实现懒加载 这种情况下一个组件生成一个js文件
      // component: resolve =>(require(['../views/PubPage.vue']),resolve)
    //使用webpack的require.ensure技术,实现按需加载 这种情况下，多个路由指定相同的chunkName，会合并打包成一个js文件。
    // component: r => require.ensure([], () => r(require('../views/PubPage.vue')), 'same')
      children:[
        // {
        //   path: '/about',
        //   name: 'About',
        //   // ES 路由懒加载
        //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        //   // vue异步组件实现懒加载
        //   // component: resolve =>(require(['../views/About.vue']),resolve)
        //   //使用webpack的require.ensure技术,实现按需加载
        //   // component: r => require.ensure([], () => r(require('../views/About.vue')), 'same')
        // },
        {
          path: '/user',
          name: 'User',
          // ES 路由懒加载
          component: () => import(/* webpackChunkName: "user" */ '../views/user.vue')
          // vue异步组件实现懒加载
          // component: resolve =>(require(['../views/user.vue']),resolve)
          //使用webpack的require.ensure技术,实现按需加载
          // component: r => require.ensure([], () => r(require('../views/user.vue')), 'same')
        },
      ]
  },
  {
    path: '/about',
    name: 'About',
    // ES 路由懒加载
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    // vue异步组件实现懒加载
    // component: resolve =>(require(['../views/About.vue']),resolve)
    //使用webpack的require.ensure技术,实现按需加载
    // component: r => require.ensure([], () => r(require('../views/About.vue')), 'same')
  },
  // {
  //   path: '/user',
  //   name: 'User',
  //   // ES 路由懒加载
  //   component: () => import(/* webpackChunkName: "user" */ '../views/user.vue')
  //   // vue异步组件实现懒加载
  //   // component: resolve =>(require(['../views/user.vue']),resolve)
  //   //使用webpack的require.ensure技术,实现按需加载
  //   // component: r => require.ensure([], () => r(require('../views/user.vue')), 'same')
  // },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
