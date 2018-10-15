<template>
  <div class="autherinfo"> 
      <div class="authorsummary">
          <div class="topbar">作者</div>
          <div class="imgWrapper">
            <img src="../assets/wechat.png" alt="">
          </div>
      </div>
      <div class="recent_topics">
          <div class="topbar">关于作者</div>
          <ul>
              <li><a href="https://github.com/no1harm/cnode-project" target='_blank'>GitHub</a></li>
              <li><a href="https://www.zhihu.com/people/chen-jun-kun/posts" target='_blank'>Blog</a></li>
              <li><a href="mailto:chen09869@gmail.com" target='_blank'>Email</a></li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: "Sider",
  data() {
    return {
        userinfo:{}
    };
  },
};
</script>

<style scoped>
.authorsummary,
.recent_replies,
.recent_topics {
  background-color: #fff;
  margin-bottom: 10px;
}
.autherinfo {
  width: 328px;
  float: right;
}
li {
    color: #fff;
  background-color: #444;
  text-align: center;
  margin-bottom:8px; 
  border-radius: 5px;
}
li:hover{
    color: #FFFFFF;    
    background-color: #2F96B4;
    box-shadow: 4px 4px 24px 0px rgba(0,0,0,0.3);

}
.recent_replies ul,
.recent_topics ul {
  margin-top: 0px;
  margin-bottom: 0px;
  list-style: none;
  padding: 14px;
}

ul a {
  text-decoration: none;
    color: #FFFFFF;
    display:block;
  padding: 10px 10px;
}

.topbar {
  padding: 10px;
  background-color: #f6f6f6;
  height: 16px;
  font-size: 12px;
}
.loginname {
  width: 100px;
  float: right;
  margin-top: 22px;
  margin-right: 159px;
  font-size: 14px;
}

.loginname a {
  text-decoration: none;
  color: #778087;
}

.authersummay .topbar {
  margin-top: 0px;
}
.scoreStyle {
  padding: 0 10px 10px;
  font-size:14px;
}
.authorsummary img{
  width: 200px;
  margin: 40px;
}
.authorsummary img:hover{
  box-shadow: 6px 6px 24px 0px rgba(0,0,0,0.3);
}
.imgWrapper{
  text-align: center;
}
</style>
