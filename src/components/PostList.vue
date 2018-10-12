<template>
  <div>
      <div class="loading" v-if="isLoader">
          <img src="../assets/loading.gif" >
      </div>
      <div class="listStyle">
          <ul>
              <li></li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: "PostList",
  data() {
    return {
        isLoader:false
    };
  },
  components: {}
};
</script>

<style scoped>
</style>
