export default {
  mutations: {
    addData(state, payload){
      state.dataArr.push(payload);
    }
  }
}