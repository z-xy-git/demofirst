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
        <a-time-picker :default-open-value="moment(moment().format('LTS'), 'HH:mm:ss')" @change="onChange" :use12Hours=false @click="sectTime"/>
        <!-- <a-time-picker :default-value="moment(moment().format('LTS'),'HH:mm:ss')" v-model="value" /> -->
        <div><button @click="btnclick" class="btn-style">提交</button></div>
      </div> 
      <div class="right-reverse-btn">
        <button @click="reverseItemData" class="btn-style">翻转</button>
      </div>
      <div class="diago">请选择时间</div>
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
      inputDataArr: [],
      isgoReverse: true,
      arr: [],
      isSectTime: false,
      isShowDiago: false
    }
  },
  methods:{
    moment,
    onChange(time,timeString) {
      this.arr.push(timeString);
    },
    btnclick() {
      if(this.isSectTime){
      this.inputDataArr.push({value: this.inputData, time: this.arr[this.arr.length - 1]});
      if(this.inputDataArr.length <= 1){
        this.$store.commit('addData',this.inputDataArr);
      }else{
        this.dataSort(this.inputDataArr);        
      }
      this.$store.commit('addData',this.inputDataArr);
      this.$router.push('/home/showData'); 
      }else{
        this.isShowDiago = true;
        console.log(this.isShowDiago);        
      }
    },
    reverseItemData(){
      if(this.isgoReverse){
        this.$router.push('/home/reverseShowData');
        this.isgoReverse = false;
      }else{
        this.$router.push('/home/showData');
        this.isgoReverse = true;
      }
    },
    sectTime(){
      this.isSectTime = true;
    },
    dataSort(arr){
      for(let i = arr.length - 1; i > 0; i--){
        if(parseInt(arr[i].time.replace(/:/g, "")) < parseInt(arr[i-1].time.replace(/:/g, ""))){
          let temp = arr[i];
          arr[i] = arr[i-1];
          arr[i-1] = temp;
        }else{
          return arr;
        }
      }
      return arr;
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
  .right .diago{
    width: 120px;
    height: 55px;
    text-align: center;
    line-height: 30px;
    font-size: 20px;
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