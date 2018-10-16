<template>
  <div class="registered">
      <div class="formWrapper">
          <h2>用户注册</h2>
          <form action="">
              <label for="username">
                  用户名 ：<span v-if="usernameIsRight">| 用户名已存在，请直接<router-link :to='{name:"Login"}'>登录</router-link></span>
              </label>
              <input  type="email" name="username"  v-model="username" placeholder="username">             
              <label for="password">
                  密码 ：
              </label>
              <input type="password" name="password"  v-model="password" placeholder="password">
          </form>
          <button @click="submitInfo">提交</button>
          <span v-if="isWorks">注册成功！即将跳转到登录页面</span>
          <span>| 已有账号？可以直接
              <router-link :to='{name:"Login"}'>登录</router-link>
            </span>
      </div>

  </div>
</template>

<script>
export default {
    name:'Registered',
  data() {
    return {
        username:'',
        password:'',
        usernameIsRight:false,
        isWorks:false
    }
  },
  methods:{
      submitInfo(){
          if (localStorage.getItem(this.username) === null) {
              this.usernameIsRight = false
              localStorage.setItem(this.username,this.password)
              this.isWorks = true
              setTimeout(()=>{
                this.$router.push({path:'/login'})
              },2000)
            }else{
                this.usernameIsRight = true
            }
      }
  }
}
</script>

<style scoped>
.registered{
    height: 86vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.formWrapper{
    width: 500px;
    height: 300px;
    border:1px solid #d1d5da;
    background-color: #fff;
    border-radius: 5px;
    text-align: center;
}
.formWrapper:hover{
    box-shadow: 4px 4px 22px 0px rgba(0,0,0,0.25);
}
.formWrapper h2{
    padding-top: 18px;
    color: #333
}
form{
    text-align: start;
    padding-left: 140px;
    padding-bottom: 10px;
    margin-top: 18px
}
input{
    display: block;
    margin-left: 20px;
        height: 18px;
    border-radius: 4px
}
label{
    display: block;
    margin-bottom: 10px;
    margin-top: 10px;
    font-size: 15px;
}
button{
    width: 100px;
    height: 30px;
    background-color: #444;
    border: none;
    border-radius: 3px;
    color: #fff;
    display: block;
    margin: 20px auto
}
button:hover{
    background-color: #2F96B4;
}
span{
    padding-top: 6px;
    font-size: 14px;
    color: #586069
}
span a {
    font-size: 14px;
    color: #586069;
    text-decoration: none;
}
span a:hover{
    color: #2F96B4
}
@media (max-width: 979px){
    .formWrapper{
            width: 94%;
    }
    form{
        padding-left: 75px;
    }
}
</style>
