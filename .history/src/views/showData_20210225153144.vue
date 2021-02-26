<template>
  <div class="show-data">
    <h4>show-data</h4>
    <p class="p" v-for="(item,index) in inputDataArr" :key="index">{{item}}</p>
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

</style>