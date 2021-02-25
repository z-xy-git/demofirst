<template>
  <div class="home">
    <h4>这是 home 页</h4>
    <input type="text" v-model="">
    <button @click="btnclick">提交</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data(){
    
  },
  methods:{
    btnclick() {
      this.$router.push('/about');
    }
  }
}
</script>
