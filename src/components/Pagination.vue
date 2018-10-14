<template>
  <div class="pagination">
      <button @click="changeBtn">首页</button>
      <button @click="changeBtn">上一页</button>
      <button v-if="isEllipsis" class="pagebtn">...</button>
      <button v-for="btn in pagebtns" 
      :class="[{currentPage:btn === currentPage},{pagebtn:true}]"
      @click="changeBtn(btn)">
          {{btn}}
      </button>
      <button @click="changeBtn">下一页</button>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: "Pagination",
  props:[
    'tab'
  ],
  data() {
    return {
        'pagebtns':[1,2,3,4,5,'...'],
        currentPage:1,
        isEllipsis:false,
        parentProp:this.$parent.pageNumber
    };
  },
  methods:{
      changeBtn(page){
          if(typeof page !== 'number'){
              switch (page.currentTarget.innerText){
                  case '首页':
                    this.pagebtns = [1,2,3,4,5,'...']
                    this.changeBtn(1)
                    break;
                  case '上一页':
                    $('button.currentPage').prev().click()
                    break;
                  case '下一页':
                    $('button.currentPage').next().click()
                    break;
                  default:
                    break;
              }
              return
          }
          if(page >4){
              this.isEllipsis = true
          }else{
              this.isEllipsis = false
          }
          this.currentPage = page 
          if(page === this.pagebtns[4]){
              this.pagebtns.shift()
              this.pagebtns.splice(4,0,this.pagebtns[3]+1 )
          }else if(page === this.pagebtns[0] && this.pagebtns[1]>2){
              this.pagebtns.splice(4,1)
              this.pagebtns.unshift(this.pagebtns[0]-1)
          }
          this.$emit('handleList',this.currentPage)
      }
  },
  components: {},
  watch:{
    tab:function(val,oldVal){
      this.pagebtns = [1,2,3,4,5,'...']
      this.changeBtn(1)
    }
  }
};
</script>

<style scoped>
.pagination {
  margin-top: 5px;
  margin-bottom: 20px;
  background-color: white;
  padding: 6px 20px;
  border-radius: 5px;
  /*box-shadow: 0px 2px 9px #888888;*/
  border: 1px solid #888888;
}

button {
  background-color: #fff;
  border: 1px solid #ddd;
  color: #778087;
  border-radius: 3px;
  outline: none;
  height: 21px;
  cursor: pointer;
  padding: 0 2px;
  width: 55px;
  height: 29px;
}

.pagebtn {
  position: relative;
  bottom: 1px;
  width: 40px;
  margin: 0 4px;
}

.currentPage {
  color: white;
  background-color: #1f1b1b;
}
</style>
