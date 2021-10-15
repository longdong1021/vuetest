import Vue from 'vue'
import router from '@/router/router.js'
import App from './App.vue'
import axios from 'axios'
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
