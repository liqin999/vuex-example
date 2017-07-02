import Vue from 'vue'
import Router from 'vue-router'


import Select from '@/components/select'
import Increment from '@/components/increment'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Select',
      component: Select
    },{
      path: '/Increment',
      name: 'Increment',
      component: Increment
    }
  ]
})
