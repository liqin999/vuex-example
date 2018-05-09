<template>
  <div>
     this is a {{msg}}
     <div>
       <span>第三级子组件中的数据显示{{count}}
       </span>
     </div> 
      <div>
        <input type="button" value="-" @click="deHandle({de:2})"/>
        <span>{{count}}</span>
        <!--<input type="button" value="+" @click="addHandle"/>-->
        <input type="button" value="+" @click="addHandle"/>
      </div>
  </div>
</template>

<script>
import { mapState,mapGetters,mapActions,mapMutations} from 'vuex'

export default {
  //使用vuex进行数据的传递。避免一级一级传递带来的的弊端。数据统一的管理
  data () {
    return {
      msg: 'three component'
    }
  },
  methods:{
      ...mapActions({
        addHandle:'addAction'
      }),

      ...mapMutations({
          deHandle:'deIncrement'
      })

  },
  computed:{//计算属性 中一部分是mapState 一部分是自己写的 父子组件嵌套层级较多的时候 使用vuex统一来管理数据
    ...mapState(['count']),
  },
}
</script>

<style scoped>
    div{
      color: green;
      font-size: 35px;
    }
</style>
