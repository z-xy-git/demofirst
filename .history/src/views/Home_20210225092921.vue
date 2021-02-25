<template>
  <div class="home">
    <h5>这是 home 页</h5>
    <input type="text" name="" id="">
    <button @click="btnclick">提交</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  methods:{
    btnclick() {
      this.$router.push('/about')
    }
  }
}
</script>
