<template>
   <div id="home">
      <!-- 头部导航 -->
      <nav-bar class="home-nav">
        <div slot="center">购物街</div>
      </nav-bar>
      <tab-control :tabtitle="['流行','新款','精选']"   @tabClick="tabClick" ref="TabControl1" v-show="isshowcontral" class="tabcla"></tab-control>
        <scroll class="contenta" 
          ref="scroll"
         :probe-type='3' 
         :pull-up-load="true"  
         @pullingUp="pullingUp"
         @scroll="scrolllength"
         >
          <swipera :banners="banners" @loadswiperimg="loadswiperimg"></swipera>
          <home-recommends :recommend="recommends"></home-recommends>
          <this-week></this-week>
          <tab-control :tabtitle="['流行','新款','精选']"   @tabClick="tabClick" ref="TabControl2"></tab-control>
          <good-list :goods="showGoods" ></good-list> 
           </scroll>
          <back-top @click.native="bettertop" v-show="isshow"></back-top>
      <!-- 轮播图 -->
   <!-- <swipera :banners="banners"></swipera> -->
   <!-- 四个大选项框 -->
     <!-- <home-recommends :recommend="recommends"></home-recommends> -->
     <!-- <this-week></this-week> -->
      <!-- <tab-control :tabtitle="['流行','新款','精选']"   @tabClick="tabClick"></tab-control> -->
    <!-- <good-list :goods="showGoods" ></good-list> -->
        <!-- 命名要注意  注册驼峰式  引用才能用 - - -  -->
    <!-- <goods-list :goods="showGoods"></goods-list> -->
 
     
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
import BackTop from '../../components/content/backTop/BackTop'
export default {
components:{
   NavBar,
   swipera,
   HomeRecommends,
   ThisWeek,
   TabControl,
    GoodList,
    Scroll,
    BackTop
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
      tabOffseTop:0,
      isshow:false,
      isshowcontral:false,
      saveY:""
          }
 },
 //  ********************************created初始化区域***************************************
 created() {
     this.getHomeMultidata()
     this.getHomeGoods("pop")
     this.getHomeGoods('new')
     this.getHomeGoods('sell')
      
  
 },
//  ********************************mounted组件加载完***************************************
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
        // console.log("aa",this.$refs.scroll.refresh())
      // this.$refs.scroll.refresh();
      // 法二
     this.$refs.scroll && this.$refs.scroll.scroll.refresh()
    
    })
    
    },
    // *******************************methods函数区（方法区）*******************************************
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
    this.$refs.TabControl1.crrent=index;
    this.$refs.TabControl2.crrent=index;
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
      },
    //  TabControl吸顶
    loadswiperimg(){
       // tabcontril吸顶效果,监听轮播图加载完之后的高度，这样比较准确
      this.tabOffseTop = this.$refs.TabControl2.$el.offsetTop
      // console.log("this.tabOffsetTop",this.$refs.TabControl.$el.offsetTop)
    },
    // 点击滚动返回到顶部
    bettertop(){
      // console.log("sadsadas",this.$refs.scroll.scrollTo(0,0,300))
      this.$refs.scroll.scrollTo(0,0,300)
    },
    // 监听滚动的长度
    scrolllength(position){
    this.isshow = position.y < -1000
    this.isshowcontral =  (-position.y) > this.tabOffseTop
    }
    },
    // *************************activated(页面进来时)*******************************************
    activated(){
      // 进来的时候获取离开时候的位置
      this.$refs.scroll.scrollTo(0,this.saveY,0)
    },
    //  *************************deactivated(页面离开)*******************************************
    deactivated(){
      // 离开页面时候，保存当前的滚动位置，并且app.vue设置此页面不销毁
      this.saveY = this.$refs.scroll.scroll.y
      // console.log("this.saveY",this.saveY)
    },
// -*************************destroy（页面销毁区域）*******************************************
    destroyed(){
      // console.log("home destory")
    },
// -*************************计算属性区********************************************************
    computed: {
    showGoods(){
      return this.goods[this.currentType].list
    }
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
.tabcla{
  position: relative;
  z-index: 9;
}
/* .contenta{
  height: 100%;
} */
</style>