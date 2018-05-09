<template>
  <div>
     this is a {{msg}}
     <div>
       <span>子组件中的数据显示{{count}}
       </span>
     </div> 
     <router-view></router-view>
  </div>
</template>

<script>
import { mapState,mapGetters,mapActions,mapMutations} from 'vuex'

export default {
  data () {
    return {
      msg: 'chilren page'
    }
  },
  computed:{//计算属性 中一部分是mapState 一部分是自己写的 父子组件嵌套层级较多的时候 使用vuex统一来管理数据
    ...mapState(['count']),
  },
}
</script>

<style scoped>
    div{
      color: red;
      font-size: 28px;
    }
</style>
