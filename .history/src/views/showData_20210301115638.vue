<template>
  <div class="show-data">
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

<style scoped>
  .show-data{
    /* position: absolute;
    left: 20px;
    top: 60px; */
    width: 400px;
    height: 625px;
    background-color: #ddd;
    }
    .show-data p {
      width: 75%;
      height: 25px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
</style>