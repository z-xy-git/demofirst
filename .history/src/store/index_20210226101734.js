import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // dataItem: '',
    dataArr: []
  },
  mutations: {
    addData(state, payload){
      state.dataArr.push(pryload);
    }
  },
  actions: {
  },
  modules: {
  }
})
