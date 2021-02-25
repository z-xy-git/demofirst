<template>
  <div class="home">
    <h4>这是 home 页</h4>
    <input type="text" v-model="inputData" placeholder="请输入" class="input-style">
    <button @click="btnclick" class="btn-style">提交</button>
    <div class="show-data">
      <p class="p"></p>
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
      inputData: ''
    }
  },
  methods:{
    btnclick() {
      // this.$router.push('/about');
      console.log(this.inputData);
      this.$el.querySelector('.p').innerHTML = this.inputData;
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
    background-color: #555;
  }
</style>