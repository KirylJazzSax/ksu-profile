import Vue from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import router from './router'
import i18n from './i18n'
import Notifications from 'vue-notification'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

Vue.config.productionTip = false
Vue.use(Notifications)
Vue.use(VuePlyr, {
  plyr: {}
})

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')