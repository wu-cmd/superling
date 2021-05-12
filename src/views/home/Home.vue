<template>
   <div id="home">
      <!-- 头部导航 -->
      <nav-bar class="home-nav">
        <div slot="center">购物街</div>
      </nav-bar>
 
 <scroll class="contenta" 
          ref="scroll"
         :probe-type='3' 
         :pull-up-load="true"  
         @pullingUp="pullingUp">
          <swipera :banners="banners"></swipera>
          <home-recommends :recommend="recommends"></home-recommends>
          <this-week></this-week>
          <tab-control :tabtitle="['流行','新款','精选']"   @tabClick="tabClick" ref="TabControl"></tab-control>
          <good-list :goods="showGoods" ></good-list> 


      <!-- 轮播图 -->
   <!-- <swipera :banners="banners"></swipera> -->
   <!-- 四个大选项框 -->
     <!-- <home-recommends :recommend="recommends"></home-recommends> -->
     <!-- <this-week></this-week> -->
      <!-- <tab-control :tabtitle="['流行','新款','精选']"   @tabClick="tabClick"></tab-control> -->
    <!-- <good-list :goods="showGoods" ></good-list> -->
        <!-- 命名要注意  注册驼峰式  引用才能用 - - -  -->
    <!-- <goods-list :goods="showGoods"></goods-list> -->
  </scroll>
     
   </div>
</template>

<script>
import NavBar from "../../components/common/navbar/Navbar"
import {getHomeMultidata,getHomeGoods} from "../../network/home"
import swipera from "./childComps/HomeSwiper"
import HomeRecommends from "./childComps/HomeRecommends"
import ThisWeek from './childComps/ThisWeek'
import TabControl from '../../components/content/tabControl/TabControl'
import  GoodList from '../../components/content/goods/GoodsList'
import Scroll from '../../components/common/scroll/Scroll'
export default {
components:{
   NavBar,
   swipera,
   HomeRecommends,
   ThisWeek,
   TabControl,
    GoodList,
    Scroll
},
 data(){
    return{
      result:null,
      banners:[], 
      recommends:[],
      goods:{
        "pop":{page:0,list:[]},
        "new":{page:0,list:[]},
        "sell":{page:0,list:[]},
      },
      currentType:"pop",
      tabOffsetTop:0
          }
 },
 created() {
     this.getHomeMultidata()
     this.getHomeGoods("pop")
     this.getHomeGoods('new')
     this.getHomeGoods('sell')
      
  
 },
  methods:{
    tabClick(index){
      switch(index){
        case 0:          
        this.currentType="pop"
        break;
         case 1: 
        this.currentType="new"
        break;
         case 2: 
        this.currentType="sell"
        break;
      }
    
    },
     getHomeMultidata(){
      getHomeMultidata().then(res => {
      // 将端口数据存入 data中的result中
      this.result = res
      this.banners = res.data.data.banner.list;
      this.recommends = res.data.data.recommend.list;
    }) 
    },
     getHomeGoods(type){
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {
      // console.log(res)
      this.goods[type].list.push(...res.data.data.list)
      this.goods[type].page += 1
      // 再次 可以触发 pullUpLoad 下拉监听
      this.$refs.scroll.scroll.finishPullUp()
      })
    },
  // 上拉加载更多
     pullingUp(){
        this.getHomeGoods(this.currentType)
      }
     

},
    computed: {
    showGoods(){
      return this.goods[this.currentType].list
    }
    },
    mounted() {
      // 监听GoodsListitem.vue中 @load 发送出来的数据
      // 刷新 scroll中 更新scrollerHeight 可以拉动的高度
    //   this.$bus.$on('itemImageLoad' ,() => {
    //   console.log(this.$refs.Homescroll.scroll)
    //   this.$refs.Homescroll && this.$refs.Homescroll.scroll.refresh()
    // })

    // 1.图片加载完成的事件监听
    // const refresh = debounce(this.$refs.Homescroll.refresh,50)
    // this.$bus.$on('itemImageLoad',() => {
    //   refresh()
    // })
      // 监听item中图片加载完成
    this.$bus.$on('itemImageLoad', ()=>{
      this.$refs.scroll.refresh();
      // console.log("aa")
    })
     // tabcontril吸顶效果
      this.tabOffsetTop = this.$refs.TabControl.$el.tabOffsetTop
    }
}
</script>

<style scoped>
#home{
  /* padding-top: 44px; */
  height: 100vh;
  /* position: relative; */
}
.home-nav{
  background-color: var(--color-tint);
  color: white;
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999; */

}
/* 滚动组件 */
.contenta{
  /* margin-top: 20px; */
  height: calc(100% - 94px);
  overflow: hidden;
  /* background: red; */
  /* border:1px solid #000 */
}
/* .contenta{
  height: 100%;
} */
</style>