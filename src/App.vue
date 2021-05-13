<template>
  <div id="app">

    <!-- 不销毁页面 -->
   <keep-alive exclude="Detail">
    <router-view></router-view>
   </keep-alive>
   
   <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>
import MainTabBar from './components/content/mainTabbar/mainTabbar'
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
@import 'assets/css/base.css';

</style>
