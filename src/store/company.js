export const state = {
  name: '',
  spend: 0,
  spendAbility: {},
  notes: '',
}

export const mutations = {
  assignCompany(state, payload) {
    Object.assign(state, payload)
  },
}
