import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

import Login from '../components/login/index'
import NewsMedia from '../components/newsmedia/index'
import Infomation from '../components/infomation/index'
import WorkRemind from '../components/workremind/index'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'home', component: Index},
    {path: '/login', name: 'login', component: Login},
    {path: '/newsmedia', name: 'newsmedia', component: NewsMedia},
    {path: '/infomation', name: 'infomation', component: Infomation},
    {path: '/workremind', name: 'workremind', component: WorkRemind}
  ]
})
