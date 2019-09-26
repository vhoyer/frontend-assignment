import 'Styles/main.scss'
import store from 'Store'
import UI from 'UI'
import Vue from 'vue'
import Vuex from 'vuex'
import router from 'Router'

Vue.config.productionTip = false

// To customize the link component used in the UILink, set the following property
// Vue.use(UI, { linkComponent: 'nuxt-link' })
// default: router-link
Vue.use(UI)
Vue.use(Vuex)

new Vue({
  el: '#app',
  render: h => h('router-view'),
  router,
  store,
})
