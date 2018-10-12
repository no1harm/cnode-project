<template>
  <div id="app">
    <Header></Header>
    <div class="main">
      <Post-list></Post-list>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import PostList from './components/PostList'
export default {
  name: "App",
  components: {
    Header,
    PostList
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body{
  background-color: #E1E1E1;
}
.main{
  width:80%;
  margin: 0 auto;
}
</style>
