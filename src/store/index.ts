import { createStore } from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'

const state = {
  count: 1231,
}
const getters = {}
export default createStore({
  state,
  getters,
  actions,
  mutations,
})
