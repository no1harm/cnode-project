<template>
  <div class="UserInfo">
      <div class="loading" v-if="isLoading">
          <div class="loader">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
      </div>
      <div v-else class="userInfomation">
          <section>
              <img :src="userInfo.avatar_url">
              <span>{{ userInfo.loginname}}</span>
              <p>
                  积分 ：{{userInfo.score}}
              </p>
              <p>
                  注册时间 ：{{userInfo.create_at | formatDate}}
              </p>
          </section>
          <div class="replies">
              <p>最近参与的话题</p>
              <ul>
                  <li v-for="item in userInfo.recent_replies">
                      <img :src="item.author.avatar_url" >
                      <router-link :to='{name:"post_content",params:{id:item.id}}'>{{item.title}}</router-link>
                      <span>{{item.last_reply_at | formatDate}}</span>
                    </li>
              </ul>
          </div>
          <div class="topics">
              <p>最近创建的话题</p>
              <ul>
                  <li v-for="item in userInfo.recent_topics">
                      <router-link :to='{name:"post_content",params:{id:item.id}}'>{{item.title}}</router-link>
                        <span>{{item.last_reply_at | formatDate}}</span>
                  </li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'UserInfo',
  data() {
    return {
        isLoading:false,
        userInfo:{}
    };
  },
  methods:{
      getUserInfo(){
          this.$axios.get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
            .then((res)=>{
                this.isLoading = false
                this.userInfo = res.data.data
                console.log(this.userInfo)
            })
            .catch((err)=>{console.log(err)})
      }
  },
  beforeMount(){
      this.isLoading = true
      this.getUserInfo()
  }
};
</script>

<style scoped>
.userInfomation {
  background: white;
  width: 75%;
  margin: 10px auto;
}
.userInfomation section {
  padding: 12px;
  position: relative;
}
.userInfomation section p,
.userInfomation section span{
    font-size: 14px;
}
.userInfomation section p{
    padding-top: 5px;
}
.userInfomation section span{
    color:#778087;
    position: absolute;
    transform: translateX(10px)
}
.userInfomation section p:nth-last-child(){
    color: #ababab;
}
.userInfomation img {
  width: 40px;
}
.userInfomation li {
  list-style: none;
}
.userInfomation .replies,
.userInfomation .topics {
  font-size: 0.72rem;
  border-top: 10px #dddddd solid;
}
.userInfomation > div > p {
  padding: 12px 0 12px 12px;
  background-color: rgba(212, 205, 205, 0.17);
  font-size: 0.75rem;
  margin: 0;
}
.userInfomation > div > ul > li {
  padding: 8px 12px 8px 12px;
  white-space: nowrap;
  font-size: 0.72rem;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 30px;
  vertical-align: middle;
  position: relative;
  border-bottom: 1px solid #E1E1E1;
}
.userInfomation > div > ul > li > a {
  color: #094e99;
  text-decoration: none;
}
.replies img{
    width: 30px;
    position: absolute;
}
.replies a{
    position: absolute;
    left:60px;
}
.replies span{
    float: right;
    color:#777;
}
.topics span{
    float: right;
    color:#777;
}
.loading {
  text-align: center;
  padding-top: 300px;
}
@media screen and (max-width: 979px){
  .userInfomation > div > ul > li > a{
    max-width: 66%;
    -o-text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
    vertical-align: middle;
    line-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .userInfomation .topics > ul > li > a{
    max-width: 80%;
    -o-text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
    vertical-align: middle;
    line-height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .userInfomation{
    width: 96%;
  }
}
.loader {
  position: absolute;
  top: 30%;
  left: 25%;
  margin-left: 10%;
  transform: translate3d(-50%, -50%, 0);
}
.dot {
  width: 24px;
  height: 24px;
  background: #3ac;
  border-radius: 100%;
  display: inline-block;
  animation: slide 1s infinite;
}
.dot:nth-child(1) {
  animation-delay: 0.1s;
  background: #32aacc;
}
.dot:nth-child(2) {
  animation-delay: 0.2s;
  background: #64aacc;
}
.dot:nth-child(3) {
  animation-delay: 0.3s;
  background: #96aacc;
}
.dot:nth-child(4) {
  animation-delay: 0.4s;
  background: #c8aacc;
}
.dot:nth-child(5) {
  animation-delay: 0.5s;
  background: #faaacc;
}
@-moz-keyframes slide {
  0% {
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}
@-webkit-keyframes slide {
  0% {
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}
@-o-keyframes slide {
  0% {
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes slide {
  0% {
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
