// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import vuetailwind from './components/vue-tailwind'
// import vuestar from './components/vue-star'
import '@/assets/styles/tailwind.css'
import './registerServiceWorker'
import './assets/styles/main.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  store,
  vuetailwind,
  // vuestar,
  components: { App },
  template: '<App/>'
}).$mount('#app')
