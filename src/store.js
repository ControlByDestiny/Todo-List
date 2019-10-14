import Vue from 'vue'
import Vuex from 'vuex'
import { actions, mutations, state } from './data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ...state
  },
  mutations: {
    ...mutations
  },
  actions: {
    ...actions
  }
})
