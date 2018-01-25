const state = {
  count: 0
}

const getters = {
  getCount: state => state.count
}

const actions = {
  actionIncrease({ commit }, number ){
    commit('increase',number)
  },
  actionDecrease({ commit }, number ){
    commit('decrease',number)
  },
  actionReset({ commit }, number ){
    commit('reset')
  }
}


const mutations = {
  ['increase'] (state, number) {
    state.count += number
  },
  ['decrease'] (state, number) {
    state.count -= number
  },
  ['reset'] (state) {
    state.count = 0
  }
}

export default {
  actions,
  mutations,
  getters,
  state
}