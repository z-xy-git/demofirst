<template>
  <div class="home">
    <h4>这是 home 页</h4>
    <input type="text" v-model="inputData">
    <button @click="btnclick">提交</button>
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
