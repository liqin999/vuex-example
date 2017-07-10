<template>
  <div id="app">

    <router-link  to="/" class="el-menu-item logo" exact >
      数字加减
    </router-link>
    
    <router-link  to="/Increment" >
        下拉框
    </router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
