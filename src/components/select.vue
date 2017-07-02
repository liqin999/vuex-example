<template>
    <section class="warp">
      <div class="searchIpt clearFix">
        <select-input  :is-show.sync="listShow"></select-input>
        <list v-show="listShow"></list>
      </div>
    </section>
</template>
<script>

//发送ajax请求 可以使用axios完成ajax请求

  //在select中是两个组件  一个是显示框一个是下拉  需要实现两个组件之间的通信传值  依赖注入的导入组件  然后注入实行
import selectInput from '@/components/selectInput'
import list from '@/components/list'

export default {
  data(){
      return {
        listShow: false,
        title: ''
      }
  },
  methods: {

  },
  components: {//将外部其他组件注入到当前的组件中
    selectInput,
    list
  }
}
</script>
