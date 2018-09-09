import Vue from 'vue'
import Router from 'vue-router'
import Motto from '@/components/Motto'
import Mail from '@/components/Mail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Motto',
      component: Motto
    },
    {
      path: '/mail',
      name: 'Mail',
      component: Mail
    }
  ]
})
