export default {
  addData(state, payload){
    state.dataArr.push(payload);
  },
  sortData(state){
    for(let i = 0; i < state.dataArr.length; i++){
      if(state.dataArr[i].time > state.dataArr[i+1].time){
        let temp = 0;
        state.dataArr[i].time = state.dataArr[i+1].time;
      }
    }
  }
  // deleteItemData(state,payload){
  //   state.dataArr.splice(payload,1);
  // },
  // deleteReverseItemData(state,payload){
  //   state.dataArr.reverse().splice(payload,1);
  // }
}