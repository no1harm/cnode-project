<template>
  <div class="PostList">
      <div class="loading" v-if="isLoading">
          <div class="loader">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
      </div>
      <div class="posts">
          <ul>
              <li>
                  <div class="toobar" v-if="isTopbarLoading">
                    <span>全部</span>
                    <span>精华</span>
                    <span>分享</span>
                    <span>问答</span>
                    <span>招聘</span>
                  </div>
              </li>
              <li v-for="post in posts">
                  <img :src="post.author.avatar_url" alt="">
                  <span>
                      <span class="reply_count"> {{ post.reply_count}}</span>
                      / {{ post.visit_count}}
                  </span>
                  <span :class="[
                  {put_good:(post.good === true)},
                  {put_top:(post.top === true)},
                  {'topiclist-tab':(post.good !== true && post.top !== true)}
                  ]">
                    {{ post | tabFormatter}}
                  </span>
                  <router-link :to="{name:'post_content',params:{id:post.id,name:post.author.loginname}}">
                    <span>{{ post.title}}</span>
                  </router-link>
                  <span class="last_reply">{{post.last_reply_at | formatDate}}</span>
              </li>
              <li>
                <Pagination @handleList='renderList'></Pagination>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import Pagination from './Pagination'
export default {
  name: "PostList",
  data() {
    return {
      isLoading: false,
      isTopbarLoading:false,
      posts: [],
      pageNumber:1
    };
  },
  methods: {
    // 获取数据
    getData() {
      this.$axios
        .get("https://cnodejs.org/api/v1/topics",{params:{
          page: this.pageNumber,
          limit: 20
        }})
        .then(response => {
          this.isLoading = false; // 加载成功后去除动画
          this.isTopbarLoading = true;
          this.posts = response.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    renderList(value){
      this.pageNumber = value
      this.getData()
    }
  },
  // 在 Vue 实例挂载到 DOM 之前获取数据
  beforeMount() {
    this.isLoading = true;
    this.getData();
  },
  components: {
    Pagination,
  }
};
</script>

<style scoped>
.PostList {
  background-color: #e1e1e1;
  margin-bottom: 30px;
}
.posts {
  margin-top: 10px;
}

.PostList img {
  height: 30px;
  width: 30px;
  vertical-align: middle;
}

ul {
  list-style: none;
  width: 100%;
  max-width: 1344px;
  margin: 0 auto;
}

ul li:not(:first-child) {
  padding: 9px;
  font-size: 15px;
  font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma,
    "Hiragino Sans GB", STHeiti, sans-serif !important;
  font-weight: 400;
  background-color: white;
  color: #333;
  border-top: 1px solid #f0f0f0;
}

li:not(:first-child):hover {
  background: #f5f5f5;
}

li:last-child:hover {
  background: white;
}

li span {
  line-height: 30px;
}

.allcount {
  width: 70px;
  display: inline-block;
  text-align: center;
  font-size: 12px;
}

.reply_count {
  color: #9e78c0;
  font-size: 14px;
}

.put_good,
.put_top {
  background: #80bd01;
  padding: 2px 4px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  color: #fff;
  font-size: 12px;
  margin-right: 10px;
}

.topiclist-tab {
  background-color: #e5e5e5;
  color: #999;
  padding: 2px 4px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  font-size: 12px;
  margin-right: 10px;
}

.last_reply {
  text-align: right;
  min-width: 50px;
  display: inline-block;
  white-space: nowrap;
  float: right;
  color: #778087;
  font-size: 12px;
}

.toobar {
  height: 40px;
  background-color: #f5f5f5;
}

.toobar span {
  font-size: 14px;
  color: #80bd01;
  line-height: 40px;
  margin: 0 10px;
  cursor: pointer;
}

.toobar span:hover {
  color: #9e78c0;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  text-decoration: underline;
}

.loading {
  text-align: center;
  padding-top: 300px;
}
.loader {
  position: absolute;
  top: 50%;
  left: 40%;
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
