import * as companyStore from './company'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

describe('Store > company', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store(companyStore)
  })

  it('starts with the right state', () => {
    expect(store.state).toEqual({
      name: '',
      notes: '',
      spend: 0,
      spendAbility: {},
    })
  })

  describe('when push spend with assignCompany', () => {
    beforeEach(() => {
      store.commit('assignCompany', {
        spend: 1000,
      })
    })

    it('updates state with the passed values', () => {
      expect(store.state).toEqual({
        name: '',
        notes: '',
        spend: 1000,
        spendAbility: {},
      })
    })
  })
})
