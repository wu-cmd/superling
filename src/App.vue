<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
// import MainTabBar from './components/content/mainTabbar/mainTabbar'
import Tabbar from './components/common/tabbar/Tabbar'
// import Tabbaritem from './components/common/tabbar/Tabbaritem'

export default {
  name: 'App',
  components: {
    Tabbar
    // Tabbaritem,
    // MainTabBar,
  }
}
</script>

<style>
@import 'assets/css/base.css';
</style>
