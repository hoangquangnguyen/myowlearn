import { createStore } from 'vuex'

const state = {
  sum: 0,
}

const mutations = {
  setSum(state: any, payload: number) {
    state.sum = payload
  },
}
const actions = {
  setSum(context: any, payload: number) {
    context.commit('setSum', payload)
  },
}
const getters = {}

export default createStore({
  state,
  getters,
  actions,
  mutations,
})
