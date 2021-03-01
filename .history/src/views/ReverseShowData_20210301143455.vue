<template>
  <div class="show-data">
    <ul class="data-ul">
      <li v-for="(item, index) in dataArr" :key="index">{{item}}</li>
    </ul>
  </div>
</template>   

<script>
import {mapGetters} from 'vuex'

export default {
  name:'ReverseShowData',
  computed:{
    ...mapGetters(['dataArr']),
    reverseDataArr(){
      let data = JSON.parse(JSON.stringify(this.dataArr))
      return data.reverse();
    }
  }
}
</script>

<style>
.show-data{
    position: absolute;
    left: 20px;
    top: 50px;
    width: 300px;
    height: 600px;
    background-color: #888;
    color: #fff;
  }
  .data-ul{
      width: 100%;
      height: 100%;
    }
    .data-ul li{
      list-style: none;
      height: 35px;
      line-height: 35px;
      border-bottom: 1px solid #ddd;
    }
</style>