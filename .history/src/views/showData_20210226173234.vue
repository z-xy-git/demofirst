<template>
  <div class="show-data">
    <h4>show-data</h4>
    <p class="p" v-for="(item,index) in dataArr" :key="index">{{item}}</p>
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
  .show-data p {
    width: 100%;
    height: 25px;
    /* overflow: hidden; */
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>