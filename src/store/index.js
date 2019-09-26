import Vuex from 'vuex'
import * as companyStore from './company'

export default () => new Vuex.Store({
  modules: {
    company: {
      ...companyStore,
      namespaced: true,
    },
  },
})
