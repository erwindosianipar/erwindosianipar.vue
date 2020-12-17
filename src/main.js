import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from './App'

import './registerServiceWorker'

import router from './router'
import store from './store'

require('@/assets/sass/main.sass')

Vue.config.productionTip = false
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
