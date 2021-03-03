export default {
  addData(state, payload){
    state.dataArr.push(payload);
  },
  sortData(state){
    
  }
  // deleteItemData(state,payload){
  //   state.dataArr.splice(payload,1);
  // },
  // deleteReverseItemData(state,payload){
  //   state.dataArr.reverse().splice(payload,1);
  // }
}