import 'Styles/main.scss'
import Vue from 'vue'
import AppView from './AppView.vue'
import router from 'Router'

new Vue({
  el: '#app',
  render: h => h(AppView),
  router,
})
