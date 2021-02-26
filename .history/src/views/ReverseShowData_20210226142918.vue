<template>
  <div class="show-data">
    <h4>show-reverse-data</h4>
    <p class="p" v-for="(item,index) in this.reverseDataArr" :key="index">{{item}}</p>
  </div>
</template>   

<script>
import {mapGetters} from 'vuex'

export default {
  name:'ReverseShowData',
  computed:{
    ...mapGetters(['reverseDataArr'])
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