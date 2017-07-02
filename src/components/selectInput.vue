<template>
    <div class="clearFix">
      <input
        readonly='readonly'
        class="keyWord"
        @click="showListHandle"
        :value="title"
      />
      <input type="button" value="GO">
      <span></span>
    </div>
</template>

<script>

export default {
  computed:{//计算属性
    title(){
        return this.$store.state.title
    }
  },
  methods: {
    showListHandle(){//告诉父组件
        this.$emit("update:isShow", !this.initShow)
    }
  }
}
</script>
