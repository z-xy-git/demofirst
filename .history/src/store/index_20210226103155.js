import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataArr: []
  },
  getters:{
    reverseDataArr(state){
      
    }
  },
  mutations: {
    addData(state, payload){
      state.dataArr.push(payload);
    }
  },
  actions: {
  },
  modules: {
  }
})
