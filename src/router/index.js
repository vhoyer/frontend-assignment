import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/company',
    // path: '/company', components: require('Pages/Company'),
    children: [
      {
        path: '',
        // path: '/company/data',
        components: require('Pages/Company/Page'),
      },
      {
        path: 'data',
        // path: '/company/data',
        components: require('Pages/Company/Data'),
      },
    ],
  },
]

export default new VueRouter({
  routes,
})
