<template>
  <div class="show-data">
    <h4>show-data</h4>
    <p class="p" v-for="(item,index) in this.$store.state.dataArr" :key="index">{{item}}</p>
  </div>
</template>   

<script>
import {mapState} from 'vuex'

export default {
  name:'ShowData',
  computed:{
    
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
</style>