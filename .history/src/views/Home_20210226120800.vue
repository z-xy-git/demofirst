<template>
  <div class="home">
    <h4>data-input</h4>
    <input type="text" v-model="inputData" 
      placeholder="请输入" 
      class="input-style"
      onmouseover="this.select()">
    <button @click="btnclick" class="btn-style">提交</button>
    <div>
      <button @click="reverseItemData" class="btn-style">点此可将数据的上下顺序进行翻转</button>
    </div>
    <div class="left">aside-showData</div>
    <router-view/>
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
      // inputDataArr: []
    }
  },
  methods:{
    btnclick() {
      this.$store.commit('addData',this.inputData);
      this.$router.push('showData');
    },
    reverseItemData(){
      this.$router.push('reverseShowData');
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
    margin: 0 0 30px 30px;
    outline: none;
    border-radius: 5px;
    background-color: #eee;
    font-size: 15px;
  }
  .left{
    position: absilute;
  }
</style>