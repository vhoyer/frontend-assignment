import 'Styles/main.scss'
import UI from 'UI'
import Vue from 'vue'
import router from 'Router'

Vue.config.productionTip = false

// To customize the link component used in the UILink, set the following property
// Vue.use(UI, { linkComponent: 'nuxt-link' })
// default: router-link
Vue.use(UI)

new Vue({
  el: '#app',
  render: h => h('router-view'),
  router,
})
