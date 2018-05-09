<template>
    <div>
      <h2>加法计数器</h2>
      <div>
        <input type="button" value="-" @click="deHandle({de:5})"/>
        <span>{{count}}</span>
        <!--<input type="button" value="+" @click="addHandle"/>-->
        <input type="button" value="+" @click="addHandle"/>
        <p>{{num2}}</p>
      </div>

        <router-view></router-view>
    </div>

   


</template>
<script>

  import { mapState,mapGetters,mapActions,mapMutations} from 'vuex'//在组件中使用Mutations
export default {
   /* computed:{//当状态发生改变的时候，组件中的值也会发生改变 所以写在计算属性中
      num(){//this代表当前组件的实例
        return this.$store.state.count
      }
    },*/


/*  computed:mapState({
   /!* num:state =>state.count*!/
 /!*   num:'count'*!/
  /!*  num(state){
        return state.count+100
    }*!/
  }),*/

  computed:{//计算属性 中一部分是mapState 一部分是自己写的
    abc(){return 132},
    ...mapState(['count']),
    ...mapGetters({
           num2:"filterCount"
     }),

  },


methods:{

  ...mapActions({
    addHandle:'addAction'
  }),
  /*addHandle:function(){//改变状态，提交一个 mutations addIncrement
 /!*  this.$store.commit("addIncrement",{
      amount: 10
    })*!/

/!*     ...mapMutations({//...代表扩展对象
     addHandle: 'addIncrement'
     }),*!/

    //提交异步操作 触发一个action
  this.$store.dispatch("addAction",{
      amount: 10
    })

  },*/



    ...mapMutations({
    deHandle:'deIncrement'
  })

 /* deHandle:function(){
  /!*  this.$store.commit("deIncrement")*!/
    this.$store.commit({//对象方式的提交
      type: 'deIncrement',
      de: 10
    })
  }*/
}
}
</script>
