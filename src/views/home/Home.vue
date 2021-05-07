<template>
   <div id="home">
      <!-- 头部导航 -->
      <nav-bar class="home-nav">
        <div slot="center">购物街</div>
      </nav-bar>
 
 <scroll class="content"  :probe-type='3' :pull-up-load="true"  >
   <ul class="contenta">
          asdasdsa 
          <li>fenlei李彪1</li>
          <li>fenlei李彪2</li>
          <li>fenlei李彪3</li>
          <li>fenlei李彪4</li>
          <li>fenlei李彪5</li>
          <li>fenlei李彪6</li>
          <li>fenlei李彪7</li>
          <li>fenlei李彪8</li>
          <li>fenlei李彪9</li>
          <li>fenlei李彪10</li>
          <li>fenlei李彪11</li>
          <li>fenlei李彪12</li>
          <li>fenlei李彪13</li>
          <li>fenlei李彪14</li>
          <li>fenlei李彪15</li>
          <li>fenlei李彪16</li>
          <li>fenlei李彪17</li>
          <li>fenlei李彪18</li>
          <li>fenlei李彪19</li>
          <li>fenlei李彪20</li>
          <li>fenlei李彪21</li>
          <li>fenlei李彪22</li>
          <li>fenlei李彪23</li>
          <li>fenlei李彪24</li>
          <li>fenlei李彪25</li>
          <li>fenlei李彪26</li>
          <li>fenlei李彪27</li>
          <li>fenlei李彪28</li>
          <li>fenlei李彪29</li>
          <li>fenlei李彪30</li>
          <li>fenlei李彪31</li>
          <li>fenlei李彪32</li>
          <li>fenlei李彪33</li>
          <li>fenlei李彪34</li>
          <li>fenlei李彪35</li>
          <li>fenlei李彪36</li>
          <li>fenlei李彪37</li>
          <li>fenlei李彪38</li>
          <li>fenlei李彪39</li>
          <li>fenlei李彪40</li>
          <li>fenlei李彪41</li>
          <li>fenlei李彪42</li>
          <li>fenlei李彪43</li>
          <li>fenlei李彪44</li>
          <li>fenlei李彪45</li>
          <li>fenlei李彪46</li>
          <li>fenlei李彪47</li>
          <li>fenlei李彪48</li>
          <li>fenlei李彪49</li>
          <li>fenlei李彪50</li>
          <li>fenlei李彪51</li>
          <li>fenlei李彪52</li>
          <li>fenlei李彪53</li>
          <li>fenlei李彪54</li>
          <li>fenlei李彪55</li>
          <li>fenlei李彪56</li>
          <li>fenlei李彪57</li>
          <li>fenlei李彪58</li>
          <li>fenlei李彪59</li>
          <li>fenlei李彪60</li>
          <li>fenlei李彪61</li>
          <li>fenlei李彪62</li>
          <li>fenlei李彪63</li>
          <li>fenlei李彪64</li>
          <li>fenlei李彪65</li>
          <li>fenlei李彪66</li>
          <li>fenlei李彪67</li>
          <li>fenlei李彪68</li>
          <li>fenlei李彪69</li>
          <li>fenlei李彪70</li>
          <li>fenlei李彪71</li>
          <li>fenlei李彪72</li>
          <li>fenlei李彪73</li>
          <li>fenlei李彪74</li>
          <li>fenlei李彪75</li>
          <li>fenlei李彪76</li>
          <li>fenlei李彪77</li>
          <li>fenlei李彪78</li>
          <li>fenlei李彪79</li>
          <li>fenlei李彪80</li>
          <li>fenlei李彪81</li>
          <li>fenlei李彪82</li>
          <li>fenlei李彪83</li>
          <li>fenlei李彪84</li>
          <li>fenlei李彪85</li>
          <li>fenlei李彪86</li>
          <li>fenlei李彪87</li>
          <li>fenlei李彪88</li>
          <li>fenlei李彪89</li>
          <li>fenlei李彪90</li>
          <li>fenlei李彪91</li>
          <li>fenlei李彪92</li>
          <li>fenlei李彪93</li>
          <li>fenlei李彪94</li>
          <li>fenlei李彪95</li>
          <li>fenlei李彪96</li>
          <li>fenlei李彪97</li>
          <li>fenlei李彪98</li>
          <li>fenlei李彪99</li>
          <li>fenlei李彪100</li>
        </ul>
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
TabControl
    return{
      result:null,
      banners:[], 
      recommends:[],
      goods:{
        "pop":{page:0,list:[]},
        "new":{page:0,list:[]},
        "sell":{page:0,list:[]},
      },
      currentType:"pop"

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
      // this.$refs.Homescroll.scroll.finishPullUp()
      })
    },
   // 



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
.content{
  height: calc(100% - 93px);
  overflow: hidden;
  /* background: red; */
  border:1px solid #000
}
</style>