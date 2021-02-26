<template>
  <div class="show-data">
    <h4>show-reverse-data</h4>
    <p class="p" v-for="(item,index) in this.$store.getters.reverseDataArr" :key="index">{{item}}</p>
  </div>
</template>   

<script>
export default {
  name:'ReverseShowData',
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
    background-color: #eee;
    color: #fff;
  }
</style>