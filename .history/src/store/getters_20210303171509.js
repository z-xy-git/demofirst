export default {
  dataArr(state){
    for(let i = 0; i < state.dataArr.length; i++){
      if(state.dataArr[i].time > state.dataArr[i+1].time){
        let temp = state.dataArr[i].time;
        state.dataArr[i].time = state.dataArr[i+1].time;
        state.dataArr[i+1].time = temp;
      }
    }
    return state.dataArr;
  }
}