<template>
  <div class="home">
    <h4>这是 home 页</h4>
    <input type="text" v-model="inputData" placeholder="请输入" class="input-style">
    <button @click="btnclick" class="btn-style">提交</button>
    <button @click="reverseItemData" class="btn-style">点此可将数据的顺序进行翻转</button>
    <div class="show-data">
      <p class="p" v-for="(item) in inputDataArr" :key="item">{{item}}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data(){
    return{
      inputData: '',
      inputDataArr: []
    }
  },
  methods:{
    btnclick() {
      // this.$router.push('/about');
      console.log(this.inputData);
      // this.$el.querySelector('.p').innerHTML = this.inputData;
      this.inputDataArr.push(this.inputData);
    },
    reverseItemData(){
      this.inputDataArr.reverse;
    }
  }
}
</script>
<style>
  .input-style{
    margin-right: 20px;
    outline: none;
    border-radius: 10px;
    width: 150px;
    height: 25px;
  }
  .btn-style{
    margin-right: 30px;
    outline: none;
    border-radius: 5px;
    background-color: #ccc;
  }
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