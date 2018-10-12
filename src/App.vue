<template>
  <div id="app">
    <Header></Header>
    <Post-list></Post-list>
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
</style>
