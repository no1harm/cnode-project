<template>
  <div class="header">
    <router-link to='/'>
      <img src="../assets/cnodejs_light.svg" alt="">
    </router-link>
    <ul>
      <li>
        <router-link :to='{name:"root"}'>
          首页
        </router-link>
      </li>
      <li><a href="#">新手入门</a></li>
      <li><a href="#">API</a></li>
      <li><a href="#">关于</a></li>
      <!-- <li><a href="#">注册</a></li>
      <li><a href="#">登录</a></li> -->
    </ul>
  </div>
</template>

<script>
export default {
  name:'Header',
  data() {
    return {

    }
  },
  components: {
  }
}
</script>

<style scoped>
.header{
  background-color: #444;
  height:50px;
}
img{
  max-width: 120px;
  margin-left: 50px;
  margin-top: 10px;
}
ul{
  list-style: none;
  float: right;
  margin-right: 50px;
}
li{
  display: inline-block;
  line-height: 50px;
  padding: 0 10px
}
a{
  text-decoration: none;
  color: #ccc;
  font-size: 13px;
  text-shadow: none;
}
@media (max-width: 979px){
  .header{
    height: 100px;
  }
  img{
      margin-left: 20px;
  }
  ul{
    margin-right: 0;
    padding-left: 10px;
    float: none;
  }
}
</style>
