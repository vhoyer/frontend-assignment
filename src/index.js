import 'Styles/main.scss'
import Vue from 'vue'
import router from 'Router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h('router-view'),
  router,
})
