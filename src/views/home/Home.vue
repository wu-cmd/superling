<template>
   <div id="home">
      <!-- 头部导航 -->
      <nav-bar class="home-nav">
        <div slot="center">购物街</div>
      </nav-bar>
   <!-- 轮播图 -->
   <swipera :banners="banners"></swipera>
   <!-- 四个大选项框 -->
     <home-recommends :recommend="recommends"></home-recommends>
     <this-week></this-week>
     
   </div>
</template>

<script>
import NavBar from "../../components/common/navbar/Navbar"
import {getHomeMultidata} from "../../network/home"
import swipera from "./childComps/HomeSwiper"
import HomeRecommends from "./childComps/HomeRecommends"
import ThisWeek from './childComps/ThisWeek'
import TabControl from '../../components/content/tabControl/TabControl'

export default {
components:{
   NavBar,
   swipera,
   HomeRecommends,
   ThisWeek,
   TabControl
},
 data(){
    return{
      result:null,
      banners:[], 
      recommends:[],
          }
 },
 created() {
     this.getHomeMultidata()
 },
  methods:{
     getHomeMultidata(){
      getHomeMultidata().then(res => {
      // 将端口数据存入 data中的result中
      this.result = res
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
    }) 
  
 },
   // 



}
}
</script>

<style scoped>
#home{
  height: 100vh;
}
.home-nav{
  background-color: var(--color-tint);
  color: white;

  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */

}
</style>