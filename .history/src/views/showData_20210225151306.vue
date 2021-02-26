<template>
  <div class="show-data">
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