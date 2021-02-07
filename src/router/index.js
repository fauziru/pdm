import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Puasa from '../components/Puasa'

Vue.use(Router)
const customRoot = {
  created () {
    console.log('redirect to home')
    this.$router.push('home')
  },
  template: '<div>on Load</div>'
}
export default new Router({
  base: '/',
  mode: 'history',
  routes: [
    {
      path: '/',
      component: customRoot
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/puasa',
      name: 'Puasa',
      component: Puasa
    }
  ]
})
