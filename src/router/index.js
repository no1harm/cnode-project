import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/Article'
import PostList from '../components/PostList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'root',
      path:'/',
      components:{
        main:PostList,
      }
    },
    {
      name:'post_content',
      path:'/topic/:id',
      components:{
        main:Article,
      }
    }
  ]
})
