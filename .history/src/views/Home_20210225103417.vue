<template>
  <div class="home">
    <h4>这是 home 页</h4>
    <input type="text" v-model="inputData" placeholder="请输入" class="input-style">
    <button @click="btnclick" class="btn-style">提交</button>
    <p></p>
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
    font-weight: 700;
  }
</style>