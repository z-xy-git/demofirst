<template>
  <div>
    <div class="show-data">
      <p class="p" v-for="(item,index) in dataArr" :key="index">{{item}}</p>
    </div>
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
  left: 100px;
  top: 160px;
  width: 400px;
  height: 660px;
  background-color: #eee;
  color: #fff;
  }
  .show-data p {
    width: 75%;
    height: 25px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>