<template>
  <div class="footer" @click="toTop">
    <img src="../assets/up.png" alt="">
  </div>
</template>

<script>
export default {
  name:'Footer',
  data() {
    return {

    }
  },
  methods:{
    toTop(){
      scrollTo(0,0);
    }
  }
}
</script>

<style scoped>
.footer{
  background-color: #444;
  height:50px;
  cursor: pointer;
  text-align: center;
  overflow: hidden;
}
.footer:hover{
  background-color: #2F96B4;
}
img{
  margin-top: 10px;
  max-width: 30px;
}
</style>