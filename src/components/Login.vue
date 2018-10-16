<template>
  <div class="login">
      <div class="formWrapper">
          <h2>用户登录</h2>
          <form action="">
              <label for="username">
                  用户名 ：<span v-if="usernameIsRight">| 用户未注册，请先<router-link :to='{name:"registered"}'>注册</router-link></span>
              </label>
              <input  type="email" name="username"  v-model="username" placeholder="username">             
              <label for="password">
                  密码 ：<span v-if="passwordIsRight">| 密码输入错误，再给你10086次机会</span>
              </label>
              <input type="password" name="password"  v-model="password" placeholder="password">
          </form>
          <button @click="submitInfo">提交</button>
          <span>| 没有账号？先
              <router-link :to='{name:"registered"}'>注册</router-link> 吧~</span>
      </div>

  </div>
</template>

<script>
export default {
    name:'Login',
  data() {
    return {
        username:'',
        password:'',
        usernameIsRight:false,
        passwordIsRight:false
    }
  },
  methods:{
      submitInfo(){
          if (localStorage.getItem(this.username) === null) {
              this.usernameIsRight = true
            }else if(localStorage.getItem(this.username) !== this.password){
                this.passwordIsRight = true
            }
            else if(localStorage.getItem(this.username) === this.password){
                this.usernameIsRight = false
                this.$router.push({name:'user',params:{name:this.username}})
                window.location.reload()
            }
      }
  }
}
</script>

<style scoped>
.login{
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
