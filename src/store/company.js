export const state = {
  name: '',
  spend: 0,
  spendAbility: {
    minimum: 0,
    maximum: 0,
  },
  notes: '',
}

export const mutations = {
  assignStore(state, payload) {
    state = {
      ...state,
      ...payload,
    }
  },
}
