
export default {
  addData(state, payload){
    state.dataArr.push(payload);
  },
  deleteItemData(state,payload){
    state.dataArr.splice(payload,1);
  }
}