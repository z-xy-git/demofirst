<template>
  <div class="show-data">
    <ul class="data-ul">
      <li v-for="(item, index) in dataArr" :key="index">{{item}}</li>
    </ul>
    <!-- <p class="p" v-for="(item,index) in dataArr" :key="index">{{item}}</p> -->
  </div>
</template>   

<script>
import {mapGetters} from 'vuex'

export default {
  name:'ShowData',
  computed:{
    ...mapGetters(['dataArr'])
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
    background-color: #eef;
    color: #333;
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
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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