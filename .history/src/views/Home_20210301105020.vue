<template>
  <div class="home">
    <div class="left">
      <div class="left-top"><h3>aside-showData</h3></div>
    </div>
    <div class="right">
      <div class="right-title"><h3>data-input</h3></div>
      <div class="right-input">
        <input type="text" v-model="inputData" 
          placeholder="请输入" 
          class="input-style"
          onmouseover="this.select()">
        <button @click="btnclick" class="btn-style">提交</button>
      </div> 
      <div class="right-reverse-btn">
        <button @click="reverseItemData" class="btn-style">点此可将数据的上下顺序进行翻转</button>
      </div>
    </div>
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
      isgoReverse: true
    }
  },
  methods:{
    btnclick() {
      this.$store.commit('addData',this.inputData);
      this.$router.push('/home/showData');
    },
    reverseItemData(){
      if(this.isgoReverse){
        this.$router.push('/home/reverseShowData');
        this.isgoReverse = false;
      }
      else{
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
    /* border: 1px solid #ccc; */
  }
  .left{
    position: absolute;
    left: 20px;
    top: 50px;
    width: 300px;
    height: 600px;
    background-color: #eee;
    /* color: #fff; */
  }
  .left-top{
    height: 35px;
    line-height: 35px;
    border: 1px solid #ccc;
  }
  .right{
    position: absolute;
    right: 20px;
    top: 50px;
    width: calc(100% - 300px);
    height: 600px;
    border: 1px solid #ccc;
    background-color: #eee;
  }
  .input-style{
    margin: 20px;
    outline: none;
    border-radius: 10px;
    width: 200px;
    height: 25px;
  }
  .btn-style{
    margin: 0 0 30px 30px;
    outline: none;
    border-radius: 5px;
    background-color: #eee;
    font-size: 15px;
  }
</style>