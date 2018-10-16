<template>
  <div class="header">
    <router-link :to='{name:"user",params:{name:this.username}}'>
      <img src="../assets/cnodejs_light.svg" alt="">
    </router-link>
    <ul>
      <li>
        <router-link :to='{name:"user",params:{name:this.username}}'>
          首页
        </router-link>
      </li>
      <li><a href="#">新手入门</a></li>
      <li><a href="#">API</a></li>
      <li><a href="#">关于</a></li>
      <li v-if='isRegistered'>
        <router-link :to='{name:"registered"}'>
          注册
        </router-link>
      </li>
      <li v-if="isRegistered">
        <router-link :to='{name:"Login"}'>登录</router-link>
        </li>
      <li v-if="userNameIsExit"><span>{{this.username}}</span> </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'Header',
  data() {
    return {
      username:this.$route.params.name
    }
  },
  components: {
  },
  computed:{
    isRegistered(){
      return !localStorage.getItem(this.username)
    },
    userNameIsExit(){
      return localStorage.getItem(this.username)
    }
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
li span {
  color:#fff;
  font-size: 13px;
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
