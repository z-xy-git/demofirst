<template>
  <div class="show-data">
    <ul class="data-ul">
      <li v-for="(item, index) in dataArr" :key="index">
        <span class="li-text">{{item.value}}</span>
        <span class="li-time">{{item.time}}</span>
        <a href="javascript:;" class="li-icon" @click="deleteClick(index)"></a>
      </li>
    </ul>
  </div>
</template>   

<script>
import {mapGetters} from 'vuex'

export default {
  name:'ShowData',
  computed:{
    ...mapGetters(['dataArr']),
    sortedDataArr(){
      return this.dataSort(dataArr);
    }
  },
  methods:{
    deleteClick(index){
      this.dataArr.splice(index,1);
    }
  },
    dataSort(arr){
      arr.map((item,index) => {
        console.log(item - index);        
        return item - index; 
      });
    }
}
</script>

<style scoped>
.show-data{
  position: absolute;
  left: 20px;
  top: 71px;
  width: 400px;
  height: 614px;
  background-color: #eee;
  color: #333;
  }
.data-ul{
  width: 100%;
  height: 100%;
  overflow: auto;
}
.data-ul li{
  position: relative;
  display: flex;
  align-items: center;
  list-style: none;
  height: 35px;
  line-height: 35px;
  border-bottom: 1px solid #ddd;
}
.data-ul .li-text{
  width: 73%;
  text-align: left;
  text-indent: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  /* background-color: #992; */
}
.data-ul .li-time{
  margin-left: 5px;
  font-size: 12px;
  color: #bbb;
}
.data-ul .li-icon{
  position: absolute;
  right: 10px;
  width: 16px;
  height: 16px;
  background: url('../assets/cancel_close_delete.png') no-repeat;
  background-size: 16px;
  opacity: 0.5;
  visibility: hidden;
}
.data-ul li:hover{
  background-color: rgba(255, 255, 255, 0.7);
}
.data-ul li:hover .li-icon{
  visibility: visible;
}
.data-ul a:hover{
  cursor: pointer;
}
    /* .show-data p {
      width: 75%;
      text-align: center;
      height: 25px;
      line-height: 25px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    } */
</style>