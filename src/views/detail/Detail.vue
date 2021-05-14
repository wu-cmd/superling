<template>
  <div  id="detail">
    <!-- <div>详情页</div> -->
      <detial-nav-bar  class="detail-nav"></detial-nav-bar>
         <scroll class="contenthe" 
          ref="Homescroll"
         :probe-type='3' 
          :pull-up-load="true"  
         >
     <detail-swiper :top-images="topImages"></detail-swiper>
     <detail-base-info :goods="goods"></detail-base-info>
     <detail-shop-info :shop="shop"></detail-shop-info>
     </scroll>
  </div>
  
</template>

<script>
import DetialNavBar from './childComps/DetialNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import {getDetail,Goods,Shop,GoodsParam,getRecommend} from '../../network/detail.js'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import Scroll from '../../components/common/scroll/Scroll'
export default {
name:'detail',
components:{
  DetialNavBar,
  DetailSwiper,
  DetailBaseInfo,
  DetailShopInfo,
  Scroll
},
data(){  
  return{
    iid:null,
    topImages:[] ,
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommends:[],
      themeTopYs:[],
      getThemeTopY:null,
      positionY:0,
      currentIndex:0,
      isShowBackTo:false,
      // message:'',
      // show:false
      // 购物车数据
      skuInfo:{},
      // 加入购物车显示隐藏
      isInfo:false
    }
},
created(){
  // 保存存入ID
 this.iid = this.$route.params.iid
  // 根据iid请求详情数据
  getDetail(this.iid).then(res =>{
    // console.log(res)
    // 获取顶部的图片轮播数据
      const data = res.data.result
      //  console.log(data.skuInfo);

      // 1.获取顶部图片 轮播数据
      this.topImages = data.itemInfo.topImages
    // console.log(this.topImages)
      // 2.获取商品信息
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      console.log(this.goods)
         // 3.创建店铺信息
      this.shop = new Shop(data.shopInfo)

  })
},
methods:{

  }
  

}
</script>

<style>
#detail{
  position: relative;
  z-index: 999;
  background-color: #fff;
  height: 100vh;
  
}

.contenthe{
  height: calc(100% - 44px - 52px);
}

.detail-nav{
  position: relative;
  z-index: 999;
  background-color: #fff;
}
</style>