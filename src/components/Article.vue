<template>
  <div class="article">
      <div class="loading" v-if="isLoading">
          <img src="../assets/loading.gif" >
      </div>
      <div v-else>
        <div class="topic_header">
            <div class="topic_title">{{ post.title }}</div>
            <ul>
                <li>· 发表于{{ post.create_at | formatDate}}</li>
                <li>· 作者：{{post.author.loginname}}</li>
                <li>· {{post.visit_count}}次浏览</li>
                <li>· 来自 {{ post | tabFormatter}}</li>
            </ul>
            <div v-html="post.content" class="topic_content markdown-body"></div>
        </div>
        <div id="reply">
            <div class="topbar">回复</div>
            <div v-for="(reply,index) in post.replies" class="replySec">
                <div class="replyUp">
                    <router-link :to="{name:'user_info',params:{name:reply.author.loginname}}">
                        <img :src="reply.author.avatar_url" class="replyUserImg">
                    </router-link>
                    <router-link :to="{name:'user_info',params:{name:reply.author.loginname}}">
                        <span>{{ reply.author.loginname}}</span>
                    </router-link>
                    <span>#{{index+1}}楼</span>
                    <span v-if="reply.ups.lenght>0"> ∆ {{ reply.ups.length}}</span>
                    <span v-else></span>
                </div>
                <p v-html="reply.content" class="replyContentStyle markdown-body"></p>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  data() {
    return {
      isLoading: false,
      post: {}
    };
  },
  methods: {
    getArticleData() {
      this.$axios
        .get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
        .then(res => {
          if (res.data.success === true) {
            this.isLoading = false;
            this.post = res.data.data;
            console.log(this.post.content)
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  beforeMount() {
    this.isLoading = true;
    this.getArticleData();
  }
};
</script>

<style >
/* @import url('../assets/markdown-github.css'); */
.topbar {
  padding: 10px;
  background-color: #f6f6f6;
  height: 16px;
  font-size: 12px;
  margin-top: 10px;
}

.article:not(:first-child) {
  margin-right: 340px;
  margin-top: 15px;
}

#reply,
.topic_header {
  background-color: #fff;
}

#reply {
  margin-top: 15px;
}
.replyUserImg {
width: 30px;
  height: 30px;
  position: relative;
  bottom: -9px;
}

#reply a,
#reply span {
  font-size: 13px;
  color: #666;
  text-decoration: none;
}
.replySec {
  border-bottom: 1px solid #e5e5e5;
  padding: 0 10px;
}

.loading {
  text-align: center;
  padding-top: 300px;
}

.replyUp a:nth-of-type(2) {
  margin-left: 0px;
  display: inline-block;
}

.topic_header {
  padding: 10px;
}

.topic_title {
  font-size: 20px;
  font-weight: bold;
  padding-top: 8px;
}

.topic_header ul {
  list-style: none;
  padding: 0px 0px;
  margin: 6px 0px;
}

.topic_header li {
  display: inline-block;
  font-size: 12px;
  color: #838383;
}

.topic_content {
  border-top: 1px solid #e5e5e5;
  padding: 10px 10px;
}

.markdown-text img {
  width: 92% !important;
}
.replyContentStyle{
  padding: 10px 35px  0 35px;
}
</style>
