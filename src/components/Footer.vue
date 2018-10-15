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
  background-color: #E1E1E1;
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
@media screen and (max-width: 979px){
  .footer{
    height: 100px;
  }
  img{
    margin-top: 20px;
    max-width: 20px;
  }
}
</style>