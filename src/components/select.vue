<template>
    <section class="warp">
      <div class="searchIpt clearFix">
        <select-input  :is-show.sync="listShow"></select-input>
        <list v-show="listShow"></list>
      </div>
      <div>
        <span>当前的值：<span>{{count}}</span></span>
      </div>
    </section>
</template>
<script>

//发送ajax请求 可以使用axios完成ajax请求

  //在select中是两个组件  一个是显示框一个是下拉  需要实现两个组件之间的通信传值  依赖注入的导入组件  然后注入实行
import selectInput from '@/components/selectInput'
import list from '@/components/list'

import { mapState,mapGetters,mapActions,mapMutations} from 'vuex'
//mapState获取计算属性的值 mapGetters获取计算属性中过滤后的计算属性
//mapMutation 改变state的唯一方式  mapActions异步的动作 
export default {
  data(){
      return {
        listShow: false,
        title: ''
      }
  },
  methods: {

  },
  computed:{//计算属性 中一部分是mapState 一部分是自己写的
    ...mapState(['count'])//获取s
  },
  components: {//将外部其他组件注入到当前的组件中
    selectInput,
    list
  }
}
</script>
