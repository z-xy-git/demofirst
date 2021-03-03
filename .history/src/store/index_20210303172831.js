import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutation'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataArr: [{value: '', time: ''}]
  },
  getters,
  mutations,
  actions: {
  },
  modules: {
  }
})
