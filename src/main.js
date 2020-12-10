import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from './App'

import router from './router'
import store from './store'

require('@/assets/sass/main.sass')

Vue.config.productionTip = false
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})

var appTitle = 'Erwindo Sianipar'

router.afterEach(to => {
  Vue.nextTick(() => {
    document.title = `${to.meta.title} | ${appTitle}`
  })
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
