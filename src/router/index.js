import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home/Home'

Vue.use(Router)

export default new Router({
  base: '/pdm/',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
