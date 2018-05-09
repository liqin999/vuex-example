import Vue from 'vue'
import Router from 'vue-router'


import Select from '@/components/select'
import Increment from '@/components/increment'

import goods from '@/components/goods'
import childgoods from '@/components/childgoods'



Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Select',
      component: Select
    },{
      path: '/Increment',//实现三级嵌套的组件
      name: 'Increment',
      component: Increment,
      children:[
        
         {
          path: '',
          component: goods,
          children:[
            {
               path: '',
               component: childgoods
            },
            {
               path: 'childgoods',
               component: childgoods
            }
           ]
         }
          
      ]
    }
  ]
})
