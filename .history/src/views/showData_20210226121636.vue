<template>
  <div class="show-data">
    <h4>show-data</h4>
    <p class="p" v-for="(item,index) in this.$store.state.dataArr" :key="index">{{item}}</p>
  </div>
</template>   

<script>
export default {
  name:'ShowData',
  data() {
    return{
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
</style>