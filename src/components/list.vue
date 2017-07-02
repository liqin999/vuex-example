<template>
    <ul class="list">
      <li v-for="item in data" @click="getTitleHandle(item.title)">{{item.title}}</li>
    </ul>
</template>

<script>
  //在li里面点击不同的列表，改变input的title中的值
export default {
  computed:{
    data(){//从store中去拿数据
         return this.$store.state.list
    }
  },
  methods:{
    getTitleHandle(title){
     //改变vuex的状态
     this.$store.commit("changeTitle",{
       title:title
     })
    }
  },
  created(){//vue声明周期渲染完成
    //获取数据
    this.$store.dispatch("getListAction")
  }
}
</script>
