<template>
  <div class="show-data">
    <ul class="data-ul">
      <li v-for="(item, index) in dataArr" :key="index">
        {{item}}
        <i class="li-icon"></i>
      </li>
    </ul>
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
  background-color: #eee;
  color: #333;
  }
.data-ul{
  width: 100%;
  height: 100%;
}
.data-ul li{
  position: relative;
  display: flex;
  align-items: center;
  list-style: none;
  height: 35px;
  line-height: 35px;
  border-bottom: 1px solid #ddd;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.data-ul li:hover{
  background-color: rgba(255, 255, 255, 0.7)
}
.data-ul .li-icon{
  position: absolute;
  right: 10px;
  width: 20px;
  height: 20px;
  background: url('../assets/cancel_close_delete.png') no-repeat;
  background-size: 18px;
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