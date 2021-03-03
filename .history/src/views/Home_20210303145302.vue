<template>
  <div class="home">
    <div class="left">
      <div class="left-top"><h3>show-data</h3></div>
    </div>
    <router-view/>
    <div class="right">
      <div class="right-title"><h3>data-input-area</h3></div>
      <div class="right-input">
        <span>输入数据：</span>
        <input type="text" v-model="inputData" 
          placeholder="请输入" 
          class="input-style"
          onmouseover="this.select()">
        <span>选择时间：</span>
        <a-time-picker :default-open-value="moment('00:00:00', 'HH:mm:ss')" @change="onChange" />
        <!-- <a-time-picker :default-value="moment(moment().format('LTS'),'HH:mm:ss')" v-model="value" /> -->
        <div><button @click="btnclick" class="btn-style">提交</button></div>
      </div> 
      <div class="right-reverse-btn">
        <button @click="reverseItemData" class="btn-style">翻转</button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Home',
  components: {
  },
  data(){
    return{
      inputData: '',
      isgoReverse: true,
      value: '',
      arr: []
    }
  },
  methods:{
    moment,
    onChange(time,timeString) {
      // let arr = [];
      this.arr.push(timeString);
      // console.log(timeString);
    },
    btnclick() {
      this.$store.commit('addData',this.inputData);
      this.$router.push('/home/showData');
      console.log(this.arr[this.arr.length - 1]);      
      // console.log(this.value);     
      // console.log(this.value._d);
      // console.log(toString(moment().format('LTS')));
      // console.log(JSON.stringify(this.value));
    },
    reverseItemData(){
      if(this.isgoReverse){
        this.$router.push('/home/reverseShowData');
        this.isgoReverse = false;
      }else{
        this.$router.push('/home/showData');
        this.isgoReverse = true;
      }
    }
  }
}
</script>
<style>
  *{
    margin: 0;
    padding: 0;
  }
  .home{
    width: 100%;
    height: 100%;
  }
  .left{
    position: absolute;
    left: 20px;
    top: 25px;
    width: 400px;
    height: 660px;
    background-color: #eee;
  }
  .left-top{
    height: 45px;
    line-height: 45px;
    text-align: center;
    border-bottom: 1px solid #ccc;
  }
  .right{
    position: absolute;
    right: 20px;
    top: 25px;
    width: calc(100% - 440px);
    height: 660px;
    border-left: 1px solid #ccc;
    background-color: #eee;
  }
  .right-title{
    height: 45px;
    line-height: 45px;
    text-align: center;
    border-bottom: 1px solid #ccc;
  }
  .input-style{
    margin: 20px;
    outline: none;
    border: 1px solid #ccc;
    box-sizing: border-box;
    border-radius: 7px;
    width: 200px;
    height: 35px;
    line-height: 35px;
    font-size: 16px;
    text-indent: 12px;
  }
  .input-style:focus{
    border: 1px solid #4e6ef2;
  }
  .btn-style{
    margin: 0 0 30px 30px;
    outline: none;
    border: none;
    width: 80px;
    height: 35px;
    border-radius: 10px;
    cursor: pointer;
    background-color: #4e6ef2;
    font-size: 15px;
    color: #fff;
  }
</style>